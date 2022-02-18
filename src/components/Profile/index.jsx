/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */

const Profile = () => {
  console.log('working');
  return (
    <div className=" w-2/3 mt-10 border font-serif bg-slate-50 rounded-md">
      <div className="mb-5 text-center">
        <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
          <img
            id="image"
            className="object-cover w-full h-32 rounded-full"
            src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645046886/U-Dance/abstract-user-flat-4_yrryw9.png"
          />
        </div>
        <label
          htmlFor="fileInput"
          type="button"
          className="cursor-pointer inine-flex justify-between items-center
          focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left
          text-gray-600 bg-white hover:bg-gray-100 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none" />
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          Browse Photo
        </label>

        <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

        <input name="photo" id="fileInput" accept="image/*" className="hidden" type="file" />
      </div>
      <div className="w-2/3  ml-auto mr-auto">
        <div className="flex flex-wrap justify-around">
          <div className="">
            <label
              htmlFor="firstname"
              className="font-bold mb-1
           text-gray-700 block"
            >
              Name
            </label>
            <input
              type="text"
              className="px-4 py-3 border focus:ring-gray-500
                    focus:border-gray-900 w-full sm:text-sm border-gray-300
                    rounded-md
                      focus:outline-none text-gray-600"
              placeholder="Enter your firstname..."
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="font-bold mb-1
         text-gray-700 block"
            >
              Lastname
            </label>
            <input
              type="email"
              className="px-4 py-3 border focus:ring-gray-500
              focus:border-gray-900 w-full sm:text-sm border-gray-300
              rounded-md
                focus:outline-none text-gray-600"
              placeholder="Enter your email address..."
            />
          </div>
        </div>
        <div className="mb-5 text-center">
          <label
            htmlFor="email"
            className="font-bold mb-1
         text-gray-700 block"
          >
            Email
          </label>
          <input
            type="email"
            className="px-4 py-3 border focus:ring-gray-500
            focus:border-gray-900 w-full sm:text-sm border-gray-300
            rounded-md
              focus:outline-none text-gray-600"
            placeholder="Enter your email address..."
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
