import React, { useState } from "react";
import Link from "next/link";
import { TbMoodCrazyHappy } from "react-icons/tb";

const Mood = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        className="px-2 py-2 mt-2 transition duration-200 ease-in-out transform bg-white bg-blue-200 border rounded-md md:px-6 hover:translate-y-1 "
        type="button"
        id="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setOpen(!open)}
      >
        <span className="flex">
          {" "}
          <TbMoodCrazyHappy className="w-12 mt-1" /> Feelin MOODIE
        </span>
      </button>
      <div
        className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown"
      >
        {open && (
          <div className="py-1 bg-blue-100 text-gray-50" role="none">
            <Link href={`/mood/${"salad"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                salad
              </button>
            </Link>
            <Link href={`/mood/${"vegan"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                vegan
              </button>
            </Link>
            <Link href={`/mood/${"Sweet"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                Sweet
              </button>
            </Link>
            <Link href={`/mood/${"Spicy"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                Spicy
              </button>
            </Link>
            <Link href={`/mood/${"medium"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                Medium
              </button>
            </Link>
            <Link href={`/mood/${"sad"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                Sad
              </button>
            </Link>
            <Link href={`/mood/${"happy"}`}>
              <button className="block px-4 py-2 text-sm text-gray-700">
                Happy
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mood;
