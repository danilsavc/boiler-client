import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className='overflow-auto'>
      <Header />
      <div className='w-full mx-auto max-w-6xl'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
