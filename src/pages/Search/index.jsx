/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardCourse from '../../components/CardCourse';
import NavBar from '../../components/NavBar';

const Search = () => {
  const courses = useSelector((state) => state.course.courses);

  return (
    <>
      <NavBar />
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
    </>
  );
};

export default Search;
