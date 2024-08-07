import React, { useState } from "react";
export const authContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [login, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [idToken, setIdToken] = useState("");
  const [verify, setVerify] = useState(false);
  const authContextValue = {
    login,
    setLoggedIn,
    error,
    setError,
    setIdToken,
    idToken,
    verify,
    setVerify,
  };
  return (
    <authContext.Provider value={authContextValue}>
      {children}
    </authContext.Provider>
  );
};
