/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CardCourse from '../../components/CardCourse';
import { fetchCourses } from '../../store/actions/courseActions';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ChooseRole from '../ChooseRole';
import { fetchSignUp } from '../../store/actions/userActions';

const LandingPage = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.user?.role);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  useEffect(() => {
    if (user) {
      const newUser = {
        name: user.name,
        email: user.email,
        image: user.picture,
      };
      dispatch(fetchSignUp(newUser));
    }
  }, []);

  return (
    <>
      {user && role === 'student'
        ? (
          <>
            <NavBar />
            <div className="text-center w-full h-full">
              <div className="bg-photo-landing bg-no-repeat bg-center">
                <div
                  className="relative group rounded-lg overflow-hidden
              shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out w-full h-96"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 w-full h-96 ml-auto
              mr-auto group-hover:opacity-75 transition duration-300 ease-in-out"
                  />
                  <div className="relative w-full h-full flex justify-center
              items-center"
                  >
                    <h3 className="text-center">
                      <div
                        className="text-white text-2xl font-playball tracking-widest
   text-center"
                        href="#"
                      >
                        <span className="absolute inset-0" />
                        U DANCE
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white text-center py-20 text-4xl
  font-light font-playball"
            >
              Dance is the hidden language of the soul...
            </div>
            <div className="bg-black">
              <div className="flex flex-wrap justify-around">
                {courses.map((course) => (
                  <Link
                    to={`/pages/teacherDetail/${course._id}`}
                    key={course._id}
                    style={{ textDecoration: 'none' }}
                  >
                    <CardCourse course={course} />
                  </Link>
                ))}
              </div>
            </div>
            <Footer />
          </>
        ) : user && role === 'director' ? (
          <div onClick={navigate('pages/director/profile')} />
        ) : <ChooseRole />}
    </>
  );
};
export default LandingPage;
