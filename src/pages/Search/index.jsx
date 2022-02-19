/* eslint-disable no-underscore-dangle */
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CardCourse from '../../components/CardCourse';
import { fetchCoursesByRhythm } from '../../store/actions/courseActions';

const Search = () => {
  const dispatch = useDispatch();
  const coursesRhythm = useSelector((state) => state.course.coursesByRhythm);
  const { rhythm } = useParams();

  useEffect(() => {
    dispatch(fetchCoursesByRhythm(rhythm));
  }, [rhythm]);

  return (
    <div className="bg-black">
      <div className="flex flex-wrap justify-around">
        {coursesRhythm.map((course) => (
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
  );
};

export default Search;
