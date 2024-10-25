// src/components/wrappers/AdminHeaderFooter.js
import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import FooterAdmin from '../FooterAdmin';

const AdminHeaderFooter = ({ component: Component }) => {
  return (
    <>
      <HeaderAdmin />
      <Component />
      <FooterAdmin />
    </>
  );
};

export default AdminHeaderFooter;
