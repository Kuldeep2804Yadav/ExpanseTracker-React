import React from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../contextApi/dark-theme";

const Theme = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const themeToggleHandler = () => {
    dispatch(setDarkMode());
  };

  return (
    <button onClick={themeToggleHandler} className="h-auto w-9 p-1 font-bold text-2xl  flex items-center justify-center">
      {darkMode ? <MdDarkMode /> : <CiLight />}
    </button>
  );
};

export default Theme;
