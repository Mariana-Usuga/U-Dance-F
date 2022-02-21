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
    console.log('entra en logou conte');
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
            >
              <div className="flex">
                <FaUserAlt />
                Perfil
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
            >
              Cursos
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
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
