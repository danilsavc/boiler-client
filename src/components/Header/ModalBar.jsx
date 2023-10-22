import React from "react";

import cancel from "../../Assets/Img/cancel.svg";

const ModalBar = ({ active, setActive }) => {
  return (
    <div className='w-screen fixed top-0 left-0 bg-neutral-800/50 z-10 grid grid-cols-6'>
      <div className='col-span-5 bg-white overflow-scroll'>
        Sit ut ea commodo id voluptate aliqua non. Aute mollit adipisicing consequat irure aute eu
        fugiat excepteur. Aliquip cupidatat sunt pariatur velit velit amet amet adipisicing proident
        minim. Esse magna eiusmod mollit ex eiusmod aute aliqua est eu ea adipisicing dolor
        deserunt. Sunt do proident nostrud sunt cupidatat nisi do occaecat. Dolore nostrud anim
        pariatur reprehenderit ipsum cillum proident aliquip mollit nisi qui. Est sunt minim aute
        quis deserunt irure ut ex duis sunt aliquip incididunt. Adipisicing est tempor consequat
        occaecat nostrud eiusmod elit veniam Lorem dolore amet et amet aliqua. Voluptate consectetur
        ipsum commodo exercitation veniam. Et velit officia irure fugiat velit commodo ipsum
        incididunt deserunt ullamco exercitation commodo pariatur occaecat. Laboris nostrud ad culpa
        dolor labore consequat dolore. Ipsum mollit qui cupidatat adipisicing. Est ut sunt duis
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
        aliqua elit ex. Deserunt est excepteur pariatur ipsum est dolor proident quis ullamco velit
      </div>
      <button className='w-11 h-11 justify-self-center rounded-md bg-orange-400 flex justify-center items-center mt-4 mr-1'>
        <img src={cancel} alt='cancel' className='w-6 h-6' />
      </button>
    </div>
  );
};

export default ModalBar;
