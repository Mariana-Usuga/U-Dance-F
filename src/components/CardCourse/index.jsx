/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';

const CardCourse = ({ course }) => (
  <div className="w-96" data-cy={course.title}>
    <img
      className="rounded-t"
      src={course.image}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl font-serif text-white">{course.title}</div>
    </div>
  </div>
);

CardCourse.propTypes = {
  course: PropTypes.string.isRequired,
};

export default CardCourse;
