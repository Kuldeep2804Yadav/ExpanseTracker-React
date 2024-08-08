import React from "react";

const Button = (props) => {
  return (
    <button
      className={` h-min text-center text-white cursor-pointer px-2 py-1 m-2 bg-red-500 shadow-md hover:bg-white hover:text-red-500 border border-red-500 rounded-lg ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
