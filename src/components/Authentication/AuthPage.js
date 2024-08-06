import React, { useState } from "react";
import InputAuth from "./InputAuth";
import { useNavigate } from "react-router";


const AuthPage = () => {
  const [login, setLoggedIn] = useState(false);
  const [error, setError] = useState();
  const naviagte= useNavigate();


  const loginHandler = async (formData) => {
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k";
    } else {
      if (formData.password != formData.confirmPassword) {
        alert("Password And Confirm Password Should Be Same");
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k";
      }
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("wrong");
      } else {
        alert("suceessfully login");
        setLoggedIn(true);
      }
      if(login){
        naviagte('/home', {replace: true})
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className=" mt-10 ">
      <div className=" h-1/2 w-1/5 border border-2 border-black shadow-lg rounded-sm m-auto p-3">
        <h1 className="text-center text-black my-2 font-bold text-xl">
          {login ? "Login" : "SignUp"}
        </h1>
        <InputAuth loginHandler={loginHandler} login={login} />
      </div>
      <div className=" mt-4 h-10 w-1/5 border border-gray-300 bg-green-300 m-auto flex items-center justify-center shadow-md">
        <div>
          {!login ? (
            <div>
              <span>Have an Account ?</span>
              <button
                onClick={() => {
                  setLoggedIn(true);
                }}
              >
                Login
              </button>
            </div>
          ) : (
            <div>
              <span> Do not have an Account ? </span>
              <button
                onClick={() => {
                  setLoggedIn(false);
                }}
              >
                SignUp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
