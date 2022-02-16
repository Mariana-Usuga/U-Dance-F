/* eslint-disable jsx-a11y/label-has-associated-control */
const CreateCourse = () => {
  console.log('working');
  return (
    <div className="font-serif font-bold min-h-screen drop-shadow-2xl py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create an Course</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Course Title</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500
              focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
              focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Teacher</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500
                 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                  focus:outline-none text-gray-600"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Place</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500
                 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                  focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Rhythm</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500
                 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
                  focus:outline-none text-gray-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Event Description</label>
                  <textarea
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 h-40
              focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md
               focus:outline-none text-gray-600"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button type="button" className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  Cancel
                </button>
                <button
                  type="button"
                  className="font-bold px-4 py-2 mt-2mt-4 font-serif text-center
                 bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl "
                >
                  Create

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
