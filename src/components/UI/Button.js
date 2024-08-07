import React from "react";

const Button = (props) => {
  return (
    <div
      className={` ${props.className} h-auto cursor-pointer w-max p-2 m-2 bg-blue-400 shadow-md hover:bg-white text-black border border-black1`} onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};

export default Button;
