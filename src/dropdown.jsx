import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'option1', label: 'Yes' },
    { value: 'option2', label: 'Probably not' },
    
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <h1>Should you use a dropdown?</h1>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
