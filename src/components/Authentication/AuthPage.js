import React, { useContext} from "react";
import InputAuth from "./InputAuth";
import { useNavigate } from "react-router";
import { authContext } from "../../contextApi/auth-context";

const AuthPage = () => {
  const {login,setLoggedIn,error,setIdToken,setError}=useContext(authContext);
  const naviagte = useNavigate();
  const loginHandler = async (formData) => {
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k";
    } else {
      if (formData.password !== formData.confirmPassword) {
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
      })
      const data =await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "An errr Occured");
      } else {
        alert("suceessfully login");
        setLoggedIn(true);
        setIdToken(data.idToken);
        localStorage.setItem("idToken",data.idToken)
       
      }
      if (login) {
        naviagte("/home", { replace: true });
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      
    }
  };

  

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen   ">
      <div className=" h-1/2 w-1/5 border border-2 shadow-lg rounded-lg p-3">
        <h1 className="text-center text-black my-2 font-bold text-xl">
          {login ? "Login" : "SignUp"}
        </h1>
        {error && alert(error)}
        <InputAuth loginHandler={loginHandler} login={login} />
      </div>
      <div className=" mt-4 h-10 w-1/5 border border-gray-300 bg-green-300  flex items-center justify-center shadow-md">
        {!login ? (
          <div>
            <span>Have an Account ? </span>
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
  );
};

export default AuthPage;
