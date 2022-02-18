import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const menu = ['About', 'Services', 'Why us', 'Contact'];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            {menu.map((item) => (
              <div className="hidden md:block cursor-pointer
            text-gray-600 hover:text-white uppercase"
              >
                {item}
              </div>
            ))}
            <div className="flex flex-row space-x-8 items-center justify-between">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2022 U Dance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
