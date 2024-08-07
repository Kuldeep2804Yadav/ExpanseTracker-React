import { useContext } from "react";
import { Context } from "../../contextApi/Context";
import Button from "../UI/Button";
import { authContext } from "../../contextApi/auth-context";
import { useNavigate } from "react-router";

const Header = (props) => {
  const { setContactFormOpen, setProfilePara, setTitle } = useContext(Context);
  const navigate=useNavigate();

  const { setIdToken, setLoggedIn,setVerify } = useContext(authContext);
  const logoutHandler = () => {
    setIdToken("");
    localStorage.removeItem("idToken");
    setLoggedIn(false);
    navigate('/', {replace:"true"})
  };
  const openHandler = () => {
    setContactFormOpen(true);
    setTitle("Winner never quite.Quitter never wins");
    setProfilePara(
      "Your Profile is 64 % completed .A complete profile has Higher chances of landing job"
    );
    setVerify(false);
  };

  return (
    <div className=" h-16 text-black p-3 border border-black flex items-center justify-between">
      <div className="font-bold text-xl">{props.title}</div>
      <div className=" h-12  w-auto flex items-center justify-center bg-gray-300 rounded-2xl bg p-2">
        <p className=" w-auto">{props.profilepara}</p>
        <button className="mx-2 w-28 text-blue-800" onClick={openHandler}>
          Complete Now
        </button>
        <Button title="Logout" onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
