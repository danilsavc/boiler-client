import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className='mx-auto max-w-6xl'>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
