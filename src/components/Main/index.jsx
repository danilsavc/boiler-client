import React from "react";
import Leftbar from "./Leftbar";
import Center from "./Center";
import Rightbar from "./Rightbar";

const Main = () => {
  return (
    <div className='pt-28'>
      <img src='https://picsum.photos/seed/picsum/200/300' alt='' className='w-full h-96' />
      <div className='hidden lg:grid grid-cols-4 mt-5 items-start'>
        <div className=''>
          <Leftbar />
        </div>
        <div className='col-span-2'>
          <Center />
        </div>
        <div className=''>
          <Rightbar />
        </div>
      </div>
      <div className='flex lg:hidden'>
        <div className='w-1/4'>
          <Leftbar />
          <Rightbar />
        </div>
        <div className='w-3/4'>
          <Center />
        </div>
      </div>
    </div>
  );
};

export default Main;
