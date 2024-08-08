import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      className="relative bg-cover h-screen w-screen flex flex-col justify-center items-center text-center bg-gray-800"
      style={{ backgroundImage: "url(https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white px-6 py-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-70">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
          Welcome to Expense Tracker
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Manage your finances effortlessly and track your spending in style.
          <br />
          Stay organized and achieve your financial goals with ease.
        </p>
        <Link to="/auth">
          <Button title="Get Started" className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-transform transform hover:scale-105" />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
