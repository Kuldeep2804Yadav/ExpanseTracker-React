import React, { useContext } from 'react';
import { authContext } from '../../contextApi/auth-context';
import Button from '../UI/Button';

const EmailVerify = () => {
  const { idToken, error, setError, setVerify } = useContext(authContext);

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
        alert("Check Your Email For Varification");
        setVerify(true);
      } else {
        throw new Error(data.error.message || "Invalid token");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button title="Verify Email" onClick={verifyEmailHandler} />
    </div>
  );
};

export default EmailVerify;
