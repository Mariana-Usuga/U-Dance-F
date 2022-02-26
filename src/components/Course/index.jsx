/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../store/actions/userActions';
import Modal from '../ModalFunctional';

const Course = ({ course }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.user.show_modal);

  const showM = () => {
    dispatch(showModal());
  };

  return (
    <>
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
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {course.price}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            data-cy={`btn-delete-course-${course._id}`}
            className="mt-4 bg-red-400 hover:bg-red-600 w-24 h-8 rounded-2xl
            font-bold"
            type="button"
            onClick={showM}
          >
            Delete
          </button>
        </td>
      </tr>
      {modal ? (
        <Modal
          btn="delete"
          cancel="Cancel"
          idCourse={course._id}
          description="Do you really want to delete your course"
        />
      ) : null}
    </>
  );
};

Course.propTypes = {
  course: PropTypes.string.isRequired,
};

export default Course;
