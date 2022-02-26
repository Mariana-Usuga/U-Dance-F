/* eslint-disable react/prop-types */
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hiddenModal } from '../../store/actions/userActions';
import { fetchRemoveCourse } from '../../store/actions/courseActions';

const ModalFunctional = ({ btn, cancel, idCourse, description }) => {
  const dispatch = useDispatch();

  const removeCourse = (id) => {
    if (btn === 'delete') {
      dispatch(fetchRemoveCourse(id));
      dispatch(hiddenModal());
      window.location.reload();
    }
    dispatch(hiddenModal());
  };

  return (
    <div
      className=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex
   justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg
     bg-white "
      >
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <FaCheckCircle className="w-16 h-16 flex items-center mx-auto
           hover:bg-purple-600 rounded-full text-purple-400"
            />
            <h2 className="text-xl font-bold py-4 ">{description}</h2>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              type="button"
              className="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider
            border-black rounded-full hover:shadow-lg"
            >
              {cancel}
            </button>

            <button
              type="button"
              className="mb-2 md:mb-0 bg-purple-400 hover:bg-purple-600 px-5 py-2
               text-sm shadow-sm font-medium tracking-wider
           text-white rounded-full hover:shadow-lg btn-modal-ok"
              data-cy="btn-modal-ok"
              onClick={() => dispatch(removeCourse(idCourse))}
            >
              {description === 'Successful Purchase'
                ? (
                  <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                  >
                    {btn}
                  </Link>
                )
                : btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFunctional;
