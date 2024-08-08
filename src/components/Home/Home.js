import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../../contextApi/Context";
import ProfileForm from "./ProfileForm";
import EmailVerify from "./EmailVerify";
import { authContext } from "../../contextApi/auth-context";
import ExpanseForm from "../Expanse/ExpanseForm";
import Expanse from "../Expanse/Expanse";

const Home = () => {
  const { contactFormOpen, profilepara, title, expense } = useContext(Context);
  const { verify } = useContext(authContext);
  console.log(expense);

  return (
    <div>
      <Header title={title} profilepara={profilepara} />
      <div>
        <ExpanseForm />
        {expense.map((item) => {
          return <Expanse expenseData={item} />;
        })}
      </div>

      {verify && <EmailVerify />}
      {contactFormOpen && <ProfileForm />}
    </div>
  );
};

export default Home;
