// src/components/wrappers/HomeHeaderFooter.js
import React from 'react';
import HeaderHome from '../HeaderHome';
import FooterHome from '../FooterHome';

const HomeHeaderFooter = ({ component: Component }) => {
  return (
    <>
      <HeaderHome />
      <Component />
      <FooterHome />
    </>
  );
};

export default HomeHeaderFooter;