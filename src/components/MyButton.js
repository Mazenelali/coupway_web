import React from "react";

function MyButton(props) {
  return (
    <button
      {...props}
      className={`${props.color || `bg-light-green`} w-full text-white py-2 font-bold`}
    >
      {props.name}
    </button>
  );
}

export default MyButton;
