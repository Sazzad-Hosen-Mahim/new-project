/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { LuAsterisk } from "react-icons/lu";

const DropdownWithInput = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFilteredOptions(options); // Reset the filtered options whenever dropdown is toggled
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    // Filter options based on input
    if (value === "") {
      setFilteredOptions(options); // Reset to all options if input is cleared
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="relative w-64">
      {/* Input and Icon */}
      <div
        className="flex items-center border p-2 rounded-md cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        <input
          type="text"
          value={selectedValue}
          placeholder="Select a value"
          className="flex-grow outline-none"
          onChange={handleInputChange}
        />
        <LuAsterisk className="text-red-600" />
        <FaAngleDown className="ml-1" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white border rounded-md shadow-md z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownWithInput;
