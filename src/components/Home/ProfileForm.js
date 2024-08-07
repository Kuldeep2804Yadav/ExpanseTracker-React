import React,{useContext, useState} from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Header from "./Header";
import { Context } from "../../contextApi/Context";

const ProfileForm = (props) => {
    const[profileFormData,setProfileFormData]= useState({name:"",image:""});
    const {setContactFormOpen}=useContext(Context);
  const changeHandle = (e) => {
    const {name,value}=e.target;
    setProfileFormData({...profileFormData,[name]:value});
  };
  const profileFormSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(profileFormData)
    setProfileFormData({name:"",image:""})


  }

  const closeFormHandler=()=>{
    setContactFormOpen(false)
  }
  return (
    <div className=" w-3/4 border border-2 shadow-lg m-auto bg-pink-50 mt-7  ">
    
      <div className="flex items-center justify-between mx-2 text-xl">
        <h1>Contact Details</h1>
        <button className="h-auto ml-2 w-auto py-1 px-2 bg-red-500 text-white text-center rounded-md my-3 font-bold text-lg" onClick={closeFormHandler}>
          Cancel
        </button>
      </div>
      <form  onSubmit={profileFormSubmitHandler}>
        <div className="flex items-center justify-around mx-3 text-xl ">
          <div className="flex mx-2 ">
            <label
              htmlFor="name"
              className="flex  items-center mx-3 "
            >
              <FaSquareGithub /> Full Name
            </label> 
            <input type="text" id="name" value={profileFormData.name}  name="name" onChange={changeHandle} className="border border-gray-200" />
          </div>
          <div  className="flex mx-2">
            <label className="flex items-center justify-between mx-3">
              <TbWorld /> Profile Photo Url
            </label>
            <input type="url" id="name" name="image" value={profileFormData.image} onChange={changeHandle} className="border border-gray-200"/>
          </div>
        </div>

        <button className="h-auto ml-2 w-auto py-1 px-2 bg-red-500 text-white text-center rounded-md my-3 font-bold text-lg">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
