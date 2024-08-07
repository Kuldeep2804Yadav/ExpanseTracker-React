import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../../contextApi/Context";
import ProfileForm from "./ProfileForm";

const Home = () => {
  const { contactFormOpen,profilepara,title } = useContext(Context);
  

  return (
    <div className="">
     <Header
          title={title}
          profilepara={profilepara}
        />

      {contactFormOpen && <ProfileForm />}
    </div>
  );
};

export default Home;
