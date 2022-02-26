/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { fetchLogoutUser } from '../../store/actions/userActions';

const VerticalMenu = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();

  const logoutContext = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-col font-serif">
        <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
        >
          <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
            <Link
              to="/pages/director/profile"
              key="1"
              style={{ textDecoration: 'none' }}
              data-cy="profile"
            >
              <div className="flex">
                <FaUserAlt />
                Profilee
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
        >
          <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
            <Link
              to="/pages/director/courseList"
              key="1"
              style={{ textDecoration: 'none' }}
              data-cy="link-courses-list"
            >
              Courses
            </Link>
          </div>
        </div>
        <div
          className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
          onClick={logoutContext}
        >
          <div
            className="font-bold text-sm md:text-lg lg:text-xl
            group-hover:underline"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            <Link
              to="/"
              key="1"
              style={{ textDecoration: 'none' }}
              data-cy="link-logout"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
