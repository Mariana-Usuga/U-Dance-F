import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Course from '../../components/Course';
import { fecthCoursesByUser } from '../../store/actions/userActions';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.user.courses);

  useEffect(() => {
    dispatch(fecthCoursesByUser());
  }, []);

  return (
    <div className="bg-white p-8 rounded-md w-2/3 font-serif font-bold">
      <div className=" flex items-center justify-between pb-6">
        <div className="flex items-center justify-between">
          <div className="lg:ml-40 ml-10 space-x-8">
            <button
              type="button"
              className="mt-4 bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl
            font-bold"
            >
              <Link
                to="/pages/director/createCourse"
                key="1"
                style={{ textDecoration: 'none' }}
                data-cy="link-create-course"
              >
                Create a course
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
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses?.length === 0 ? 'No tienes cursos'
                  : courses?.map((course) => (
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
