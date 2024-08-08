import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const [forgetFormData, setForgetFormData] = useState({ email: "" });
  const navigate = useNavigate();

  const emailHandler = (e) => {
    const { value, name } = e.target;
    setForgetFormData({ ...forgetFormData, [name]: value });
  };

  const forgetFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: forgetFormData.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert("Check your Email for Forget Password");
        navigate("/", { replace: true });
      } else {
        throw new Error(data.error.message || "Invalid Email");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={forgetFormSubmit}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Forget Password
        </h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            value={forgetFormData.email}
            onChange={emailHandler}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
