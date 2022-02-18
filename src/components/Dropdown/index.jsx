/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleOpen = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className=" font-sans py-16 mr-20">
      <div className="relative">
        <button
          type="button"
          className="flex"
        >
          <span className=" text-white text-xl">
            Courses
          </span>
          <span className="text-white mt-2" onClick={toggleOpen}>
            {showDropdown ? <FaChevronUp className="w-10" />
              : <FaChevronDown className="w-10" />}
          </span>
        </button>
        {showDropdown
        && (
          <ul>
            <li>Salsa</li>
            <li>Bachata</li>
            <li>Kisomba</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
