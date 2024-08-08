import React, { useEffect, useState } from "react";
export const authContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const [verify, setVerify] = useState(true);

  const inititalToken = localStorage.getItem("idToken");
  const [idToken, setIdToken] = useState(inititalToken);

  const userIsLoggedIn = !!idToken;
  console.log(userIsLoggedIn);
  const loginHandler = (idToken) => {
    setIdToken(idToken);
    localStorage.setItem("idToken", idToken);
  };

  const logoutHandler = () => {
    setIdToken("");
    localStorage.removeItem("idToken");
  };

  useEffect(() => {
    if (idToken) {
      loginHandler(idToken);
    }
  }, [idToken]);

  const authContextValue = {
    error,
    setError,
    idToken,
    verify,
    setVerify,
    isLoggedIn: userIsLoggedIn,
    loginHandler,
    logOut: logoutHandler,
  };

  return (
    <authContext.Provider value={authContextValue}>
      {children}
    </authContext.Provider>
  );
};
