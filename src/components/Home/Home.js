import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../../contextApi/Context";
import ProfileForm from "./ProfileForm";
import EmailVerify from "./EmailVerify";
import { authContext } from "../../contextApi/auth-context";

const Home = () => {
  const { contactFormOpen, profilepara, title } = useContext(Context);
  const {verify}=useContext(authContext);
  

  return (
    <div className=" ">
      <Header title={title} profilepara={profilepara} />
      {verify && <EmailVerify/>}
      {contactFormOpen && <ProfileForm/>}
      
    </div>
  );
};

export default Home;
