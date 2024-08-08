import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "./components/Authentication/AuthPage";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import { authContext } from "./contextApi/auth-context";
import Welcome from "./components/UI/Welcome";

function App() {
  const { isLoggedIn } = useContext(authContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Welcome />}
        />
        <Route
          path="/auth"
          element={isLoggedIn ? <Navigate to="/home" /> : <AuthPage />}
        />
        <Route
          path="/forgetpassword"
          element={isLoggedIn ? <Navigate to="/home" /> : <ForgetPassword />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
