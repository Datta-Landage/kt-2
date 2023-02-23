import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { useStores } from "../store/checkStore";

const Dropdown = () => {
  const { isTrue, toggleTrue } = useStores();

  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        className="px-5 py-2 mt-2 transition duration-200 ease-in-out transform bg-white border rounded-md shadow-md outline-none hover:translate-y-1 hover:shadow-lg"
        type="button"
        id="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setOpen(!open)}
      >
        <BiFilter />
      </button>
      <div
        className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown"
        tabIndex="-1"
      >
        {open && (
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-gray-700"
              onClick={toggleTrue}
            >
              Check All
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700"
              onClick={toggleTrue}
            >
              unCheck All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
