import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
