import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, firestore } from '../firebase'; // Firebase configuration
import { 
  collection, query, where, getDocs, doc, updateDoc 
} from 'firebase/firestore'; // Firestore methods
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Monitor auth state & logout

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store the current user's data
  const [loading, setLoading] = useState(true); // Track loading state

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await fetchUserData(currentUser.email); // Fetch and set user data using email
      } else {
        setUser(null); // Clear state if logged out
      }
      setLoading(false); // Set loading to false once state resolves
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Fetch user data from Firestore using email
  const fetchUserData = async (email) => {
    try {
      const collections = ['buyers', 'sellers', 'admins'];
      for (const collectionName of collections) {
        const q = query(collection(firestore, collectionName), where('email', '==', email));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          // Assuming there's only one document per user email
          const userData = snapshot.docs[0].data();
          const userId = snapshot.docs[0].id; // Store the document ID for future updates
          setUser({ email, role: collectionName.slice(0, -1), id: userId, ...userData });
          return; // Exit the loop once the user is found
        }
      }
      console.error('No matching user document found!');
      setUser(null); // Clear user if no role is found
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null); // Clear user on error
    }
  };

  // Update user data in Firestore
  const updateUser = async (userId, updatedData) => {
    try {
      const userRef = doc(firestore, user.role + 's', userId); // Reference to the user's document
      await updateDoc(userRef, updatedData); // Merge new data with existing
      await fetchUserData(user.email); // Refresh the user data in state
    } catch (error) {
      console.error('Error updating user data:', error);
      throw new Error('Failed to update user data.');
    }
  };

  // Logout function to clear session
  const logout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      setUser(null); // Clear user state
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
