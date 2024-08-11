import React, { useState, useEffect } from "react";
import Expanse from "../Expanse/Expanse";
import Header from "../Home/Header";
import ExpanseForm from "../Expanse/ExpanseForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../contextApi/expenseSlice";
import ProfileForm from "../Home/ProfileForm";

const Home = () => {
  const [editExpenseData, setEditExpenseData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const expenses = useSelector((state) => state.expense.expenses);
  const contactFormOpen = useSelector((state) => state.expense.contactFormOpen);
  const darkModeTheme = useSelector((state)=> state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleEdit = (expenseData) => {
    setEditExpenseData(expenseData);
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditExpenseData(null);
    setEditMode(false);
  };

  return (
    <div className={darkModeTheme ? "darkmode" : "lightMode "}>
      <Header />
      {contactFormOpen && <ProfileForm />}
      
      {!contactFormOpen && (
        <>
          <ExpanseForm
            editMode={editMode}
            initialData={editExpenseData}
            onClose={handleCloseForm}
          />
          {expenses.map((expense) => (
            <Expanse
              key={expense.id}
              expenseData={expense}
              onEdit={handleEdit}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
