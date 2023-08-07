import React from "react";

function MySelect(props) {
  return (
    <select
      {...props}
      className="bg-gray-50 border border-gray-500 border-dashed text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {props.children}
    </select>
  );
}

export default MySelect;
