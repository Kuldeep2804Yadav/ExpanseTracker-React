import React, { useState } from "react";
import InputAuth from "./InputAuth";

const AuthPage = () => {
  const loginHandler = async (formData) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k",
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("wrong");
      } else {
        alert("suceessfully login");
      }
      console.log(response.json());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="m mt-10">
      <div className=" h-1/2 w-1/5 border border-2 border-black shadow-lg rounded-sm m-auto p-3">
        <h1 className="text-center text-black my-2 font-bold text-xl">
          Sign UP
        </h1>
        <InputAuth loginHandler={loginHandler} />
      </div>
      <div className=" mt-4 h-10 w-1/5 border border-gray-300 bg-green-300 m-auto flex items-center justify-center shadow-md">
        <span>Have an Account ?</span> <button>Login</button>
      </div>
    </div>
  );
};

export default AuthPage;
