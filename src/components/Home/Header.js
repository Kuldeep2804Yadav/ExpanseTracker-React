import { useContext } from "react";
import { Context } from "../../contextApi/Context";
import Button from "../UI/Button";
import { authContext } from "../../contextApi/auth-context";
import { useNavigate } from "react-router";

const Header = (props) => {
  const { setContactFormOpen, setTitle } = useContext(Context);
  const navigate = useNavigate();

  const {  setVerify,logOut } = useContext(authContext);

  const logoutHandler = () => {
    logOut();
    navigate("/", { replace: true });
  };

  const openHandler = () => {
    setContactFormOpen(true);
    setTitle("Winner never quit. Quitter never wins");
    
    setVerify(false);
  };

  return (
    <div className=" h-max text-black p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50 shadow-md">
      <div className="font-bold text-xl">{props.title}</div>
      <div className="h-10 flex items-center bg-gray-300 rounded-2xl p-3">
        <p className="mr-4">{props.profilepara}</p>
        <button
          className="mx-2 w-28 text-blue-800 hover:underline focus:outline-none"
          onClick={openHandler}
        >
          Complete Now
        </button>
        <Button title="Logout" className="py-0.5" onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
