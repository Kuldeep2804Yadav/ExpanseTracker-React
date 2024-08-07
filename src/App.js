import AuthPage from "./components/Authentication/AuthPage";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/Authentication/ForgetPassword";



function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
       
        
      </Routes>
    </div>
  );
}

export default App;
