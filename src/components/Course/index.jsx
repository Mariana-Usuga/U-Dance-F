import PropTypes from 'prop-types';

const Course = ({ course }) => {
  console.log('working');

  return (
    <tr>
      <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={course.image}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {course.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{course.teacher}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {course.place}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {course.rhythm}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" />
    </tr>
  );
};

Course.propTypes = {
  course: PropTypes.string.isRequired,
};

export default Course;
