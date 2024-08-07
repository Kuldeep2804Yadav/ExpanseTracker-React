import React from "react";
import { useState } from "react";
import { replace, useNavigate } from "react-router";
import Button from "../UI/Button";

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
            "content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert("Check your Email for Forget Password");
        navigate("/", { replace: true });
      } else {
        throw new Error(data.error.messge || "Invalid Email");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <form
        onSubmit={forgetFormSubmit}
        className="h-auto w-56 bg-pink-200  p-2 "
      >
        <h1 className="text-center mt-1 font-bold ">Forget Password</h1>
        <div className="text-center my-6">
          <label htmlFor="email">Email</label>
          <input
            className="border border-black p-1"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            value={forgetFormData.email}
            onChange={emailHandler}
          />
        </div>
        
        <button type="submit" className="text-white border border-black px-1 w-3/4 rounded-lg bg-red-600 hover:bg-white hover:text-black mx-6">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
