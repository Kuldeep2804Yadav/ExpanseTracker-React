import React from "react";
import { useState } from "react";

const InputAuth = (props) => {
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

    if (formData.password === formData.confirmPassword) {
      props.loginHandler(formData);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Password And Confirm Password Should Be Same");
    }
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
          className=" h-9 w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg"
        />

        <input
          type="password"
          onChange={changeHandler}
          name="password"
          value={formData.password}
          required
          placeholder="Password"
          className=" h-9 w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg"
        />

        <input
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={formData.confirmPassword}
          required
          placeholder="ConfirmPassword"
          className=" h-9  w-11/12 p-2 my-2 border border-gray-300 border-2 rounded-lg"
        />
      </div>

      <button
        className=" h-9 w-11/12 bg-blue-700 text-white text-center rounded-2xl my-3 font-bold text-lg"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default InputAuth;
