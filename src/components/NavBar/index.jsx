/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
// import { useDispatch } from 'react-redux';
// import { fetchSignUp } from '../../store/actions/userActions';

const NavBar = () => {
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const toggleOpen = () => {
    setShowMenu(!showMenu);
  };

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
          <li className="p-5 bg-black text-white">
            <button onClick={loginWithRedirect}>
              Log in
            </button>

          </li>
          <li className="p-5 bg-black text-white">Sign up</li>
        </ul>
        )}
    </nav>
  );
};

export default NavBar;
