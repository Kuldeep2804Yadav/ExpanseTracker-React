import React, { useContext, useState } from "react";
import InputAuth from "./InputAuth";
import { useNavigate } from "react-router";
import { authContext } from "../../contextApi/auth-context";

const AuthPage = () => {
  const { error, loginHandler, setError } = useContext(authContext);
  const [isLogin, setIsloggedIn] = useState(true);
  const [loading ,setLoading]=useState(false);
  const navigate = useNavigate();

  const loginSubmitHandler = async (formData) => {
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k";
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError("Password and Confirm Password should be the same");
        return;
      }
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k";
    }

    try {
      setLoading(true)
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

      const data = await response.json();
      setLoading(false);


      if (!response.ok) {
        throw new Error(data.error.message || "An error occurred");
      }

     

      if (isLogin) {
        loginHandler(data.idToken);
        navigate("/home", { replace: true });

      }

      alert("Successfully logged in");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
        <h1 className="text-center text-black mb-4 font-bold text-2xl">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <InputAuth loginHandler={loginSubmitHandler} isLogin={isLogin} loading ={loading}/>
      </div>
      <div className="mt-4 w-full max-w-sm bg-gray-100 border border-gray-300 p-3 rounded-lg shadow-md flex items-center justify-center">
        <button
          onClick={() => setIsloggedIn((prev) => !prev)}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
