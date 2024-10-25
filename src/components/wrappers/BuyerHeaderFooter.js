// src/components/wrappers/BuyerHeaderFooter.js
import React from 'react';
import HeaderBuyer from '../HeaderBuyer';
import FooterBuyer from '../FooterBuyer';

const BuyerHeaderFooter = ({ component: Component }) => {
  return (
    <>
      <HeaderBuyer />
      <Component />
      <FooterBuyer />
    </>
  );
};

export default BuyerHeaderFooter;
