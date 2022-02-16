/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourse } from '../../store/service/courseService';

const DetailTeacher = () => {
  const [course, setCourse] = useState();
  const { id } = useParams();

  useEffect(async () => {
    const fetchCourse = await getCourse(id);
    setCourse(fetchCourse.data);
  }, []);

  return (
    <div className="h-screen bg-no-repeat bg-cover
    bg-[url('https://res.cloudinary.com/db3njhxi0/image/upload/v1644781249/U-Dance/Singapore_City_at_Night_hbk8kk.jpg')]"
    >
      <div className="bg-gradient-to-l from-white pt-10 mr-8 ml-8 h-full top-2 flex flex-wrap text-center justify-evenly font-serif font-bold">
        <div className="w-1/2">
          <img className="h-3/4 ml-auto mr-auto" src={course?.image} alt="ChitChat Logo" />
        </div>
        <div className="w-2/4 pr-8 pl-8">
          <h4 className="text-2xl">{course?.title.toUpperCase()}</h4>
          <p className="text-2xl">{course?.teacher.toUpperCase()}</p>
          <p className="pt-6">{course?.description.toUpperCase()}</p>
          <p className="pt-4">{course?.place.toUpperCase()}</p>
          <button
            className="mt-4 bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl font-bold"
            type="button"
          >
            <Link
              to="/pay"
              style={{ textDecoration: 'none' }}
            >
              TOMAR CURSO
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
};

export default DetailTeacher;
