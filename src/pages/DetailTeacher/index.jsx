/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../../store/service/courseService';

const DetailTeacher = () => {
  const [course, setCourse] = useState();
  const { id } = useParams();

  useEffect(async () => {
    const fetchCourse = await getCourse(id);
    setCourse(fetchCourse.data);
  }, []);

  return (
    <div className="flex flex-wrap text-center justify-evenly m-10 font-serif font-bold">
      <div>
        <img className="chat-notification-logo" src={course?.image} alt="ChitChat Logo" />
      </div>
      <div className="w-2/4">
        <h4>APRENDE SALSA</h4>
        <span>{course?.teacher}</span>
        <p>{course?.description}</p>
        <span>{course?.place}</span>
      </div>
    </div>
  );
};

export default DetailTeacher;
