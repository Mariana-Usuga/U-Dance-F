import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Course from '../../components/Course';
import { fetchCourses } from '../../store/actions/courseActions';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div className="bg-white p-8 rounded-md w-2/3 font-serif font-bold">
      <div className=" flex items-center justify-between pb-6">
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <button
              type="button"
              className="bg-indigo-600
            px-4 py-2 rounded-md text-white font-semibold tracking-wide
            cursor-pointer"
            >
              <Link
                to="/pages/createCourse"
                key="1"
                style={{ textDecoration: 'none' }}
              >
                Crear un curso
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Curso
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Profesor
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Place
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Ritmo
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <Course course={course} />
                ))}
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
