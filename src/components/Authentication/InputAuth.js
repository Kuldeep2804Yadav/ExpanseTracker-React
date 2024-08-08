import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../UI/Loading";

const InputAuth = ({ loginHandler, isLogin,loading }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    loginHandler(formData);
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
    <form
      onSubmit={formSubmitHandler}
      className="p-6 max-w-md mx-auto bg-white rounded-lg text-center"
    >
      <div className="mb-4">
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
          required
          placeholder="Email"
          className="h-10 w-full p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}
        <div className="relative h-10 w-full p-3 my-2 border border-gray-300 rounded-lg flex items-center">
          <input
            type={passwordVisible ? "text" : "password"}
            onChange={changeHandler}
            name="password"
            value={formData.password}
            required
            placeholder="Password"
            className="w-full border-none outline-none focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {formErrors.password && (
          <p className="text-red-500 text-sm">{formErrors.password}</p>
        )}
        {!isLogin && (
          <input
            type="password"
            onChange={changeHandler}
            name="confirmPassword"
            value={formData.confirmPassword}
            required
            placeholder="Confirm Password"
            className="h-10 w-full p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        {formErrors.confirmPassword && (
          <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
        )}
      </div>
      {loading ? (
        <h1 className="font-bold text-lg ">Loading...</h1> 
      ) : (
        <button
          className="h-10 w-full bg-blue-600 text-white rounded-lg my-3 font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      )}

      {isLogin && (
        <Link to="/forgetpassword">
          <button className="my-3 text-blue-500 hover:text-blue-700 focus:outline-none">
            Forgot Password?
          </button>
        </Link>
      )}
    </form>
  );
};

export default InputAuth;
