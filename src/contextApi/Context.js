import React, { useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [profilepara, setProfilePara] = useState("Your Profile is Incomplete");
  const [title, setTitle] = useState("Welcome To Expense Tracker");
  const [expense, setExpense] = useState([]);

  const addExpense = async (expenseData) => {
    
    console.log(expenseData)
    try {
      const res = axios.post("https://expanse-tracker-50dd1-default-rtdb.firebaseio.com/expenses.json",expenseData)
    } catch (error) {
      console.error('Error posting data:', error); 
    }
  };
  const getExpenseData= async ()=>{
   

    try{
      const res =await axios.get("https://expanse-tracker-50dd1-default-rtdb.firebaseio.com/expenses.json");
      const data = Object.values(res.data)
     
      setExpense(data);
    }
    catch(error){
      console.log(error);

    }

  }
  useEffect(()=>{
    getExpenseData();

  },[])

  const contextValue = {
    setContactFormOpen,
    contactFormOpen,
    profilepara,
    setProfilePara,
    title,
    setTitle,
    addExpense,
    expense
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
