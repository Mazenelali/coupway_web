import React, { useState } from "react";

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center space-x-2">
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <div className={`${isChecked ? "bg-light-green" : "bg-gray-300"}toggle-path w-8 h-4 rounded-full bg-light-green shadow-inner`}></div>
                    <div
                        className={`toggle-handle absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 transition-transform duration-300 ease-in-out ${
                            isChecked ? "translate-x-full" : ""
                        }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default ToggleSwitch;
