/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dropdown from '../Dropdown';
// import { useDispatch } from 'react-redux';
// import { fetchSignUp } from '../../store/actions/userActions';

const NavBar = () => {
  const { user } = useAuth0();
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   if (user) {
  //     const newUser = {
  //       name: user.name,
  //       email: user.email,
  //       image: user.picture,
  //     };
  //     dispatch(fetchSignUp(newUser));
  //   }
  // }, [user]);
  //

  return (
    <nav>
      <ul className="flex bg-black h-32 text-white">
        <Link
          className="flex-1 mt-2 ml-60"
          to="/pages/main"
          style={{ textDecoration: 'none' }}
        >
          <li>
            <img className="w-24 ml-auto mr-auto" src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645150905/U-Dance/images_kszsmu.png" alt="" />
          </li>
        </Link>
        <li className="">
          {user ? null : <Dropdown />}
        </li>
        <li
          className="text-4xl mt-8 mr-8 text-white font-serif"
          onClick={() => setShowMenu(!showMenu)}
        >
          {user ? user.given_name : showMenu ? <FaTimes /> : <FaBars /> }
        </li>
      </ul>
      {showMenu
        && (
        <ul className="text-center absolute right-0 w-2/3 z-10">
          <li className="p-5 bg-black text-white font-serif">Home</li>
          <li className="p-5 bg-black text-white font-serif">Course</li>
          <li className="p-5 bg-black text-white font-serif">
            <button>
              Log in
            </button>
          </li>
          <li className="p-5 bg-black text-white font-serif">Sign up</li>
        </ul>
        )}
    </nav>
  );
};

export default NavBar;
