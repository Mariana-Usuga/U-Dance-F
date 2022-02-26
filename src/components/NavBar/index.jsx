/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown';

const NavBar = () => {
  const role = useSelector((state) => state.user.user.role);
  const { user, logoutContext } = useAuth0();

  return (
    <nav>
      <ul className="flex bg-black h-32 text-white">
        <Link
          className="flex-1 mt-2 ml-60"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <li>
            <img className="w-24 ml-auto mr-auto" src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645150905/U-Dance/images_kszsmu.png" alt="" />
          </li>
        </Link>
        <li className="">
          {user && role === 'director' ? null : <Dropdown />}
        </li>
        <li onClick={logoutContext} className="text-2xl mt-8 mr-8 text-white font-serif">Logout</li>
      </ul>
    </nav>
  );
};

export default NavBar;
