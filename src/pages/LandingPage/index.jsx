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

  return (
    <>
      <div className="">
        <img className="w-8/12 ml-auto mr-auto" src="https://res.cloudinary.com/db3njhxi0/image/upload/v1644634655/U-Dance/WhatsApp_Image_2022-02-11_at_9.56.11_PM_iwu2a1.jpg" alt="" />
        <div className="absolute top-56 right-96 left-80 text-white text-center">
          <h1>U Dance</h1>
          <p>ClASESS, COURSES</p>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex flex-wrap">
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
