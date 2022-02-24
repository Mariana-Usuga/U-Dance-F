/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../store/actions/courseActions';
import Modal from '../../components/ModalFunctional';
import { showModal } from '../../store/actions/userActions';

const URL_BASE = 'http://localhost:8080';

const CreateCourse = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.user.show_modal);
  const [formCourse, setFormCourse] = useState();
  // const [image, setImage] = useState();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formCourse };
    newState[name] = value;
    setFormCourse(newState);
  };

  const onChangeFile = (e) => {
    setFormCourse({ ...formCourse, image: e.target.files[0] });
  };

  const sendCourse = async (e) => {
    e.preventDefault();
    const formDataImage = new FormData();
    formDataImage.append('image', formCourse.image);

    const responseImage = await axios.post(
      `${URL_BASE}/api/upload/file`,
      formDataImage,
    );
    const newCourse = {
      title: formCourse.title,
      teacher: formCourse.teacher,
      description: formCourse.description,
      place: formCourse.place,
      price: parseFloat(formCourse.price.replace(/,/g, '')),
      image: responseImage.data.url,
      rhythm: formCourse.rhythm,
    };
    dispatch(createCourse(newCourse));
    dispatch(showModal());
  };

  return (
    <>
      <div className="font-serif font-bold min-h-screen drop-shadow-2xl py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700 ml-auto mr-auto">
                  <h2 className="leading-relaxed text-center">Create a course</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Course Title</label>
                      <input
                        type="text"
                        name="title"
                        className="px-4 py-2 border focus:ring-gray-500
              focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
              focus:outline-none text-gray-600"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Teacher</label>
                      <input
                        type="text"
                        name="teacher"
                        className="px-4 py-2 border focus:ring-gray-500
                    focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                      focus:outline-none text-gray-600"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Price</label>
                      <input
                        type="text"
                        name="price"
                        className="px-4 py-2 border focus:ring-gray-500
                   focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                    focus:outline-none text-gray-600"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Rhythm</label>
                      <input
                        type="text"
                        name="rhythm"
                        className="px-4 py-2 border focus:ring-gray-500
                 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                  focus:outline-none text-gray-600"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Place</label>
                    <input
                      type="text"
                      name="place"
                      className="px-4 py-2 border focus:ring-gray-500
                    focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                      focus:outline-none text-gray-600"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Event Description</label>
                    <textarea
                      type="text"
                      name="description"
                      className="px-4 py-2 border focus:ring-gray-500 h-40
              focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
               focus:outline-none text-gray-600"
                      placeholder="Optional"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label
                  className="createProductContainer__item__images__update"
                  htmlFor="products"
                >
                  Upload course image
                </label>
                <input
                  className="createProductContainer__item__images__inputImg"
                  onChange={onChangeFile}
                  type="file"
                  name="image"
                  id="products"
                  accept="image/*"
                  multiple
                />
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="button"
                    className="font-bold px-4 py-2 mt-2mt-4 font-serif text-center
                 bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl "
                    onClick={sendCourse}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? <Modal btn="OK" /> : null}
    </>
  );
};

export default CreateCourse;
