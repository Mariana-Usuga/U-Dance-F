import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
// min-h-screen
// py-48 mt-5
const VerticalMenu = () => {
  console.log('working');
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
        <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
        >
          <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
            <Link
              to="/pages/director/createCourse"
              key="1"
              style={{ textDecoration: 'none' }}
            >
              Alumnos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
