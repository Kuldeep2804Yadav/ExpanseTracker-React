import React from "react";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import EmailVerify from "./EmailVerify";
import ExpanseForm from "../Expanse/ExpanseForm";
import Expanse from "../Expanse/Expanse";
import { useSelector } from "react-redux";
import { fetchExpenses } from "../../contextApi/expenseSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const contactFormOpen = useSelector((state) => state.expense.contactFormOpen);
  const profilepara = useSelector((state) => state.expense.profilePara);
  const title = useSelector((state) => state.expense.title);
  const expenses = useSelector((state) => state.expense.expenses);
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses()); // Dispatch the thunk action
  }, [dispatch]);

  return (
    <div>
      <Header title={title} profilePara={profilepara} />
      {contactFormOpen && <ProfileForm />}
      {!contactFormOpen && (
        <div>
          <ExpanseForm />
          {expenses.length > 0 ? (
            expenses.map((item) => <Expanse key={item.id} expenseData={item} />)
          ) : (
            <p>No expenses found</p>
          )}
        </div>
      )}

      <EmailVerify />
     
    </div>
  );
};

export default Home;
