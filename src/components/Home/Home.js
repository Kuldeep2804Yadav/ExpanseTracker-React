import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../../contextApi/Context";
import ProfileForm from "./ProfileForm";
import EmailVerify from "./EmailVerify";

const Home = () => {
  const { contactFormOpen, profilepara, title } = useContext(Context);
  const { verify } = useContext(Context);

  return (
    <div className=" ">
      <Header title={title} profilepara={profilepara} />
      {!verify && <EmailVerify />}
      {verify && contactFormOpen && <ProfileForm />}
      
    </div>
  );
};

export default Home;
