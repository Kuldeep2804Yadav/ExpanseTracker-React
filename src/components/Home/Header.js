import { useContext } from "react";
import { Context } from "../../contextApi/Context";


const Header = (props) => {
  const { setContactFormOpen } = useContext(Context);
  const openHandler = () => {
    setContactFormOpen(true);
    console.log("clicked");
  };

  return (
    <div className=" h-16 text-black p-3 border border-black flex items-center justify-between">
      <div className="font-bold text-xl">{props.title}</div>
      <div className=" h-auto  w-auto flex items-center justify-center bg-gray-300 rounded-2xl bg p-2">
        <p className=" w-auto">{props.profilepara}</p>
        <button className="mx-2 w-28 text-blue-800" onClick={openHandler}>
          Complete Now
        </button>
      </div>
    </div>
  );
};

export default Header;
