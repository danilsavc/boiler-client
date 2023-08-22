import React from "react";

import menu from "../../Assets/Img/menu.svg";

const Header = () => {
  return (
    <div>
      <div>
        <h1>The Boiler room</h1>
        <h3>coffe & more</h3>
      </div>
      <div>
        <button>
          <img src={menu} alt='menu' className='w-4 h-4' />
        </button>
      </div>
      <nav>
        <div>
          <span>Меню</span>
        </div>
        <div>
          <span>Залишити відгук</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
