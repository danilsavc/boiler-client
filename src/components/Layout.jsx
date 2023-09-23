import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-6xl'>
        <Outlet />
      </div>
      sad
    </div>
  );
};

export default Layout;
