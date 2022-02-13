/* eslint-disable no-underscore-dangle */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

const CardCourse = ({ course }) => (
  <div className="transition hover:translate-x-4 duration-700 max-w-md mx-auto bg-black text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={course.image} alt="Man looking at item at a store" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide h-8 text-sm text-white text-center border-y border-indigo-600 font-semibold">
          {course.teacher}
        </div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium">
          {course.title}
        </a>
        <p className="mt-2 text-slate-500">
          {course.description}
        </p>
        <span>{course.place}</span>
      </div>
    </div>
  </div>
);

CardCourse.propTypes = {
  course: PropTypes.string.isRequired,
};

export default CardCourse;

{ /* // const CardCourse = ({ course }) => (
//   <div className="">
//     <div className="w-3/4">
//       <img src={course.image} alt="" />
//     </div>
//     <div>
//       <h4>{course.teacher}</h4>
//     </div>
//   </div>
// ); */ }
