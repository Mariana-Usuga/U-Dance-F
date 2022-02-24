/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleOpen = () => {
    setShowDropdown(!showDropdown);
  };

  const rhythm = ['salsa', 'bachata'];

  return (
    <div className=" font-sans py-10 mr-20">
      <div className="relative">
        <button
          type="button"
          className="flex "
        >
          <span className=" text-white text-2xl" onClick={toggleOpen}>
            Courses
          </span>
          <span className="text-white mt-2" data-cy="dropdown" onClick={toggleOpen}>
            {showDropdown ? <FaChevronUp className="w-10" />
              : <FaChevronDown className="w-10" />}
          </span>
        </button>
        {showDropdown
        && (
        <ul className="text-center z-10 absolute">
          {rhythm.map((item) => (
            <div
              data-cy="rhythm"
              className="p-5 bg-blue-600 text-white font-serif z-50"
              onClik={() => setShowDropdown(!showDropdown)}
            >
              <Link
                to={`/pages/search/${item}`}
                key={item}
                style={{ textDecoration: 'none' }}
              >
                {item}
              </Link>
            </div>
          )) }
        </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
