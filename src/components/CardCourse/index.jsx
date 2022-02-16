/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

const CardCourse = ({ course }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <article>
      <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
        <article>
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-2xl font-bold text-center" href="#">
                <span className="absolute inset-0" />
                {course.title}
                {/* <img src={course.image} alt="" /> */}
              </a>
            </h3>
          </div>
        </article>
        <article
          className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
          // style="background-image: url('https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-2xl font-bold text-center" href="#">
                <span className="absolute inset-0" />
                Python Frameworks
              </a>
            </h3>
          </div>
        </article>
        <article
          className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
          // style="background-image: url('https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-2xl font-bold text-center" href="#">
                <span className="absolute inset-0" />
                The best plugins for Visual Studio Code
              </a>
            </h3>
          </div>
        </article>
      </section>
    </article>
  </section>
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
