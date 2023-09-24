import React from "react";

import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
  return (
    <div className='border-t border-gray-300 my-4'>
      <div className='grid grid-cols-2 mx-auto max-w-6xl pt-12 items-start'>
        <LeftFooter />
        <RightFooter />
      </div>
    </div>
  );
};

export default Footer;
