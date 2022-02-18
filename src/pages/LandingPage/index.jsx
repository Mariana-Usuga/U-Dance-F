/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardCourse from '../../components/CardCourse';
import { fetchCourses } from '../../store/actions/courseActions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  // max-w-8xl mx-auto sm:px-6
  // sm:px-6
  return (
    <>
      <div className="text-center w-full h-full">
        {/* <article> */}
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
                <a className="text-white text-2xl font-serif font-bold text-center" href="#">
                  <span className="absolute inset-0" />
                  Top 10 highest paid programming languages of 2021
                </a>
              </h3>
            </div>
          </div>
        </div>
        {/* </article> */}
      </div>
      <div className="bg-black text-white text-center py-20 text-3xl font-cursive">
        Dance is the hidden language of the soul...
      </div>
      <div className="bg-black">
        <div className="flex flex-wrap justify-around">
          {courses.map((course) => (
            <Link
              to={`/teacherDetail/${course._id}`}
              key={course._id}
              style={{ textDecoration: 'none' }}
            >
              <CardCourse course={course} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
