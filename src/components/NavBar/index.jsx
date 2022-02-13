/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleOpen = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <ul className="flex bg-black h-32 text-white">
        <li className="flex-1 text-3xl text-center pt-4 pl-4 font-sans">U Dance</li>
        <li
          className="text-3xl pt-5 pr-4"
          onClick={toggleOpen}
        >
          <FaBars />
        </li>
      </ul>
      {showMenu
        && (
        <ul className="text-center absolute right-0 w-96">
          <li className="p-5 bg-black text-white font-serif">Home</li>
          <li className="p-5 bg-black text-white font-mono">Course</li>
          <li className="p-5 bg-black text-white">Log in</li>
          <li className="p-5 bg-black text-white">Sign up</li>
        </ul>
        )}
    </nav>
  );
};

export default NavBar;
