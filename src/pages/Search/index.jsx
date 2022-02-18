/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardCourse from '../../components/CardCourse';

const Search = () => {
  const courses = useSelector((state) => state.course.courses);

  return (
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
  );
};

export default Search;
