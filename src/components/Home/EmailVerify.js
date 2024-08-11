import React from 'react';
import Button from '../UI/Button';
import { useSelector } from 'react-redux';

const EmailVerify = () => {
  // Accessing idToken and error from the Redux store
  const idToken = useSelector((state) => state.auth.idToken);

  const verifyEmailHandler = async () => {
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Check Your Email For Verification");
        // Dispatch an action to update the verify state if necessary
      } else {
        throw new Error(data.error.message || "Invalid token");
      }
    } catch (error) {
      console.log(error);
      // Dispatch an action to set the error in Redux if necessary
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button title="Verify Email" onClick={verifyEmailHandler} />
    </div>
  );
};

export default EmailVerify;
