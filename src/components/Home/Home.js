import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../../contextApi/Context";
import ProfileForm from "./ProfileForm";

const Home = () => {
  const { contactFormOpen } = useContext(Context);

  return (
    <div className="">
      {contactFormOpen ? (
        <Header
          title="Winner never quite.Quitter never wins"
          profilepara="Your Profile is 64 % completed .A complete profile has Higher chances of landing job"
        />
      ) : (
        <Header
          title="Welcome To Expanse Tracker"
          profilepara="Your Profile is Incomplate"
        />
      )}

      {contactFormOpen && <ProfileForm />}
    </div>
  );
};

export default Home;
