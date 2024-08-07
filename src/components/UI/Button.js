import React from "react";

const Button = (props) => {
  return (
    <div
      className={` ${props.className} h-auto text-white cursor-pointer w-max p-2 m-2 bg-blue-400 shadow-md hover:bg-white hover:text-black border border-black1 rounded-lg`} onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};

export default Button;
