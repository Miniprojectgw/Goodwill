import React, { useState } from 'react';

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-5 px-19 bg-white hover:bg-amber-100 rounded-3xl p-2">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center p-5 rounded-lg focus:outline-none hover:text-blue-900"
      >
        <span className="text-lg text-left text-gray-600 font-italics hover:text-blue-900">{question}</span>
        <span className="font-italics text-indigo-600 hover:text-blue-900">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="text-gray-600 mt-1 p-2 hover:text-blue-900">{answer}</p>}
    </div>
  );
};

export default Dropdown;
