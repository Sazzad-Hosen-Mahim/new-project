import { useState } from "react";

const NotARobot = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-3 mb-12 border rounded-lg p-4 shadow-md max-w-sm mt-8 bg-[#F9F9F9]">
      {/* Checkbox */}
      <input
        type="checkbox"
        id="robotCheck"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-6 h-6 cursor-pointer border-gray-400 focus:ring-2 focus:ring-blue-500"
      />

      {/* Text */}
      <label htmlFor="robotCheck" className="text-gray-700 cursor-pointer">
        I am not a robot
      </label>

      {/* Icon or Fake CAPTCHA */}
      <div className="ml-auto flex items-center justify-center bg-gray-200 text-sm text-gray-500 rounded-md px-4 py-2">
        <span>reCAPTCHA</span>
      </div>
    </div>
  );
};

export default NotARobot;
