/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import Dropdown from '../Dropdown';
// import { useDispatch } from 'react-redux';
// import { fetchSignUp } from '../../store/actions/userActions';

const NavBar = () => {
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect } = useAuth0();
  console.log('show', showMenu);
  // const toggleOpe = () => {
  //   console.log('entra en toggleOpen');
  //   setShowMenu(!showMenu);
  // };

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

  return (
    <nav>
      <ul className="flex bg-black h-32 text-white">
        <li className="flex-1 text-3xl pt-4 pl-4 font-sans">
          <img className="w-24 ml-auto mr-auto" src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645150905/U-Dance/images_kszsmu.png" alt="" />
        </li>
        <li className="mr-5">
          <Dropdown />
        </li>
        <li
          className="text-3xl pt-5 pr-4 "
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </li>
      </ul>
      {showMenu
        && (
        <ul className="text-center absolute right-0 w-2/3">
          <li className="p-5 bg-black text-white font-serif">Home</li>
          <li className="p-5 bg-black text-white font-serif">Course</li>
          <li className="p-5 bg-black text-white font-serif">
            <button onClick={loginWithRedirect}>
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
