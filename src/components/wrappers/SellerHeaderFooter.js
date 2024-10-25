// src/components/wrappers/SellerHeaderFooter.js
import React from 'react';
import HeaderSeller from '../HeaderSeller';
import FooterSeller from '../FooterSeller';

const SellerHeaderFooter = ({ component: Component }) => {
  return (
    <>
      <HeaderSeller />
      <Component />
      <FooterSeller />
    </>
  );
};

export default SellerHeaderFooter;
