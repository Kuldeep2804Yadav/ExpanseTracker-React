import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputAuth = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.loginHandler(formData);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form onSubmit={formSubmitHandler} className="p-3 text-center">
      <div>
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
          required
          placeholder="Email"
          className="h-9 w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg"
        />
        <div className="relative h-9 w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg mx-auto flex items-center">
          <input
            type={passwordVisible ? "text" : "password"}
            onChange={changeHandler}
            name="password"
            value={formData.password}
            required
            placeholder="Password"
            className="w-full border-none outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {!props.login && (
          <input
            type="password"
            onChange={changeHandler}
            name="confirmPassword"
            value={formData.confirmPassword}
            required
            placeholder="Confirm Password"
            className="h-9 w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg"
          />
        )}
      </div>
      <button
        className="h-9 w-11/12 bg-blue-700 text-white text-center rounded-2xl my-3 font-bold text-lg"
        type="submit"
      >
        {!props.login ? "Signup" : "Login"}
      </button>
      {props.login && <button className="my-3">Forgot Password?</button>}
    </form>
  );
};

export default InputAuth;
