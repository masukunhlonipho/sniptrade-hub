import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import AuthContext
import Loader from '../../components/Loader'; // Import the Loader component
import '../styles/BuyerAccount.css'; // Import styles

const Account = () => {
  const { user, updateUser } = useAuth(); // Access user info and update function
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    addresses: [],
  });
  const [newAddress, setNewAddress] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [loading, setLoading] = useState(false); // Loading state

  // Populate form data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
        addresses: Array.isArray(user.addresses) ? user.addresses : [],
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true); // Start loading
    try {
      // Use `user.id` to update the correct document in Firestore
      await updateUser(user.id, {
        username: formData.username,
        email: formData.email,
      });
      alert('Account updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating account:', error);
      setError('Failed to update your information. Please try again.');
    }
    setLoading(false); // End loading
  };

  const handleAddAddress = async () => {
    if (!newAddress.trim()) {
      setError('Address cannot be empty.');
      return;
    }

    setLoading(true); // Start loading
    try {
      const updatedAddresses = [...formData.addresses, newAddress];

      // Update Firestore document with the new addresses
      await updateUser(user.id, { addresses: updatedAddresses });

      // Update local state
      setFormData((prev) => ({
        ...prev,
        addresses: updatedAddresses,
      }));
      setNewAddress('');
      setError('');
    } catch (error) {
      console.error('Error adding address:', error);
      setError('Failed to add the address. Please try again.');
    }
    setLoading(false); // End loading
  };

  const handleRemoveAddress = async (addressToRemove) => {
    setLoading(true); // Start loading
    try {
      const updatedAddresses = formData.addresses.filter(
        (address) => address !== addressToRemove
      );

      // Update Firestore document with the updated addresses
      await updateUser(user.id, { addresses: updatedAddresses });

      // Update local state
      setFormData((prev) => ({
        ...prev,
        addresses: updatedAddresses,
      }));
      setError('');
    } catch (error) {
      console.error('Error removing address:', error);
      setError('Failed to remove the address. Please try again.');
    }
    setLoading(false); // End loading
  };

  // Show loading spinner when loading
  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div className="account">
      <h1>Your Account</h1>
      {error && <p className="error-message">{error}</p>}
      {!isEditing ? (
        <div className="account-info">
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <div className="address-section">
            <h2>Addresses:</h2>
            {formData.addresses.length > 0 ? (
              formData.addresses.map((address, index) => (
                <div key={index} className="address-item">
                  {address}
                  <button
                    onClick={() => handleRemoveAddress(address)}
                    className="remove-address-button"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No addresses added yet.</p>
            )}
          </div>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit Details
          </button>
        </div>
      ) : (
        <form className="account-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="account-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="account-input"
            />
          </div>
          <div className="form-group">
            <label>Addresses:</label>
            {formData.addresses.map((address, index) => (
              <div key={index} className="address-item">
                {address}
                <button
                  onClick={() => handleRemoveAddress(address)}
                  className="remove-address-button"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="add-address">
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Add new address"
                className="account-input"
              />
              <button
                type="button"
                onClick={handleAddAddress}
                className="add-address-button"
              >
                Add Address
              </button>
            </div>
          </div>
          <button type="submit" className="update-button">
            Update Account
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="cancel-button"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Account;
