import AuthPage from "./components/Authentication/AuthPage";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import ProfileForm from "./components/Home/ProfileForm";
import { useContext } from "react";
import { Context } from "./contextApi/Context";


function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
