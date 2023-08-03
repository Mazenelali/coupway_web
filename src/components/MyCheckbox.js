import React, { useState } from "react";

function MyCheckbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label className="flex text-black font-medium text-sm">
      <input
        type="checkbox"
        className="hidden border-2 border-dashed w-5 h-5 text-blue-600 focus:ring focus:ring-blue-200"
        checked={isChecked}
        onChange={handleCheckboxChange}
        {...props}
      />
      <div
        style={props.checkboxStyle}
        className={`w-6 h-6 border-2 border-dashed border-gray-400 ${
          isChecked ? "bg-blue-500" : "bg-white"
        } mr-2 `}
      ></div>
      {props.label}
    </label>
  );
}

export default MyCheckbox;
