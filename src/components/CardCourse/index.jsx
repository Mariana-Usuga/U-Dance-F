/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
// max-w-sm rounded material-card bg-blue-600
// w-full rounded-t  in img
const CardCourse = ({ course }) => (
  <div className="w-96">
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

{ /* <div className="flex justify-center transition hover:translate-x-4
duration-700  bg-black text-white rounded-xl
 overflow-hidden "
>
  <div className="md:flex bg-slate-600">
    <div className="md:shrink-0">
      <img className="h-48  object-cover md:h-full md:w-48"
       src={course.image} alt="Man looking at item at a store" />
    </div>
    <div className="p-8">
      <p className="uppercase tracking-wide h-8 text-sm
       text-white text-center border-y border-indigo-600 font-semibold">
        {course.teacher}
      </p>
      <p href="#" className="block mt-1 text-lg leading-tight font-medium">
        {course.title}
      </p>
      {/* <p className="mt-2 text-slate-500">
        {course.description}
      </p>
      <span>{course.place}</span> */ }
// </div>
// </div>
// </div>
