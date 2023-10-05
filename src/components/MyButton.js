import React from "react";

function MyButton({onClick ,name}) {
    return (
        <button
            onClick={onclick}
            className={`${ `bg-light-green`
            } w-full text-white py-2 font-bold`}
        >
            {name}
        </button>
    );
}

export default MyButton;
