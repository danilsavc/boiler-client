import React from "react";
import Leftbar from "./Leftbar";
import Center from "./Center";
import Rightbar from "./Rightbar";

const Main = () => {
  return (
    <div className='flex items-start mt-2'>
      <div className='w-1/4'>
        <Leftbar />
      </div>
      <div className='w-1/2 '>
        <Center />
      </div>
      <div className='w-1/4 '>
        <Rightbar />
      </div>
    </div>
  );
};

export default Main;
