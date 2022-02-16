/* eslint-disable jsx-a11y/anchor-is-valid */
// mx-auto px-4 py-8 max-w-xl my-20
const ChooseRole = () => {
  console.log('work');
  return (
    <div className="">
      <h2 className=" font-serif font-bold text-center text-4xl pt-14">ESCOJE TU ROL</h2>
      <div className="flex flex-wrap justify-center pt-14">
        <div className="drop-shadow-2xl">
          <div className=" bg-white shadow-2xl rounded-lg mb-6 tracking-wide mr-10">
            <div className="md:flex-shrink-0">
              <img
                src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645023444/U-Dance/WhatsApp_Image_2022-02-16_at_9.50.28_AM_u72tif.jpg"
                alt="mountains"
                className="w-full h-64 rounded-lg rounded-b-none"
              />
            </div>
            <div className="px-4 py-2 font-serif text-center
          bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl"
            >
              <button type="button" className="font-bold">
                ALUMNO
              </button>
            </div>
          </div>
        </div>
        <div className="drop-shadow-2xl">
          <div className="bg-white drop-shadow-[0 35px 35px rgba(253, 99%, 50%)]
          rounded-lg mb-6 tracking-wide ml-10"
          >
            <div className="md:flex-shrink-0">
              <img
                src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645023230/U-Dance/WhatsApp_Image_2022-02-16_at_9.50.28_AM_1_tlczly.jpg"
                alt="mountains"
                className="w-full h-64 rounded-lg rounded-b-none"
              />
            </div>
            <div className="px-4 py-2 mt-2mt-4 font-serif text-center
           bg-purple-400 hover:bg-purple-600 w-64 h-10 rounded-2xl "
            >
              <button type="button" className="font-bold">
                DIRECTOR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
