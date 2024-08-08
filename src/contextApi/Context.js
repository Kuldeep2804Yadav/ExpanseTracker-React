import React, { useState } from "react";

export const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [profilepara, setProfilePara] = useState("Your Profile is Incomplete");
  const [title, setTitle] = useState("Welcome To expense Tracker");
  const [expense, setExpense] = useState([]);

  const handleExpenseData = (expenseData)=>{
    console.log(expenseData);
    setExpense((prevExpense=>[...prevExpense,expenseData]))
    
    
    

  }
  

  const contextValue = {
    setContactFormOpen,
    contactFormOpen,
    profilepara,
    setProfilePara,
    title,
    setTitle,
    handleExpenseData,
    expense
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
