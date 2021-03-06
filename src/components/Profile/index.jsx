/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import axios from 'axios';
import { fetchGetUser, fetchSignUp, fecthUpdateUser, showModal } from '../../store/actions/userActions';
import ModalFunctional from '../ModalFunctional';

const URL_BASE = 'http://localhost:8080';

const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading, user, isAuthenticated } = useAuth0();
  const token = JSON.parse(localStorage.getItem('token'));
  const userRes = useSelector((state) => state.user.user);
  const modal = useSelector((state) => state.user.show_modal);
  const [formUpdateUser, setFormUpdateUser] = useState();
  const [chagePhoto, setChagePhoto] = useState();

  useEffect(() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
  }, []);

  useEffect(() => {
    if (user) {
      const newUser = {
        name: user.given_name,
        lastname: user.family_name,
        email: user.email,
        image: user.picture,
      };
      dispatch(fetchSignUp(newUser));
    }
  }, [user]);

  useEffect(() => {
    dispatch(
      fetchGetUser(token),
    );
  }, []);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formUpdateUser };
    newState[name] = value;
    setFormUpdateUser(newState);
  };

  const sendUpdateData = async () => {
    const formDataImage = new FormData();
    formDataImage.append('image', formUpdateUser.image);

    const responseImage = await axios.post(
      `${URL_BASE}/api/upload/file`,
      formDataImage,
    );

    const dataUser = {
      image: responseImage.data.url,
      name: formUpdateUser.name,
      lastname: formUpdateUser.lastname,
    };
    dispatch(fecthUpdateUser(userRes._id, dataUser));
    dispatch(showModal());
  };

  const onChangeFile = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = async () => {
      setChagePhoto(reader.result);
    };

    setFormUpdateUser((formUpdateUser) => ({
      ...formUpdateUser,
      image: e.target.files[0],
    }));
  };

  return (
    <>
      {isAuthenticated && (
      <div className=" w-2/3 mt-10 mb-36 border font-serif bg-slate-50 rounded-md">
        <div className="mb-5 text-center">
          <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative
           bg-gray-100 mb-4 shadow-inset"
          >
            <img
              id="image"
              className="object-cover w-full h-32 rounded-full"
              src={chagePhoto || userRes.image}
            />
          </div>
          <label
            htmlFor="fileInput"
            type="button"
            className="cursor-pointer inine-flex justify-between items-center
          focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left
          text-gray-600 bg-white hover:bg-gray-100 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="0" y="0" width="24" height="24" stroke="none" />
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Add photo
          </label>

          <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
            Click to add profile picture
          </div>
          <input
            data-cy="profile-picture"
            name="photo"
            id="fileInput"
            accept="image/*"
            className="hidden"
            type="file"
            onChange={onChangeFile}
          />
        </div>
        <div className="w-2/3  ml-auto mr-auto">
          <div className="flex flex-wrap justify-around">
            <div className="">
              <label
                data-cy="name-label"
                htmlFor="name"
                className="font-bold mb-1
              first:text-gray-700 block"
              >
                Name
              </label>
              <div className="flex">
                <input
                  data-cy="name"
                  id="name"
                  name="name"
                  type="text"
                  className="px-4 py-3 border focus:ring-gray-500
                    focus:border-gray-900 sm:text-sm border-gray-300
                    rounded-md
                      focus:outline-none text-gray-600"
                  placeholder={userRes.name ? userRes.name : user.given_name}
                  onChange={handleChange}
                />
                <FaPen className="absolute ml-44 mt-3 text-gray-600" />
              </div>
            </div>
            <div className="">
              <label
                data-cy="lastname-label"
                htmlFor="lastname"
                className="font-bold mb-1
         text-gray-700 block"
              >
                Lastname
              </label>
              <div className="flex">
                <input
                  data-cy="lastname"
                  name="lastname"
                  id="lastname"
                  type="email"
                  className="px-4 py-3 border focus:ring-gray-500
              focus:border-gray-900 w-full sm:text-sm border-gray-300
              rounded-md
                focus:outline-none text-gray-600"
                  placeholder={userRes.lastname ? userRes.lastname : user.family_name}
                  onChange={handleChange}
                />
                <FaPen className="absolute ml-44 mt-3 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="mb-5 text-center">
            <label
              data-cy="email-label"
              htmlFor="email"
              className="font-bold mb-1
            text-gray-700 block"
            >
              Email
            </label>
            <div className="flex">
              <input
                name="email"
                id="email"
                type="email"
                className="px-4 py-3 border focus:ring-gray-500
            focus:border-gray-900 w-4/5 sm:text-sm border-gray-300
            rounded-md
              focus:outline-none text-black"
                placeholder={userRes.email ? userRes.email : user.email}
              />
              <FaPen className="absolute ml-96 mt-3 text-gray-600" />
            </div>
          </div>
        </div>
        <button
          data-cy="btn-save-changes"
          className="mt-4 bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl
            font-bold ml-auto mr-auto"
          type="button"
          onClick={sendUpdateData}
        >
          Save changes
        </button>
      </div>
      )}
      {modal ? <ModalFunctional btn="ok" description="Successfully saved your changes" />
        : null}
    </>
  );
};

export default Profile;
