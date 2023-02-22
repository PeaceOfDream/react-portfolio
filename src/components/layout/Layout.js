import React from 'react'
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/scrollToTop';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
		<Outlet/>
      <Footer />
    </>
  );
}
