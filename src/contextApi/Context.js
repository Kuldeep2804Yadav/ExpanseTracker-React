import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbReceiptYuan } from "react-icons/tb";

export const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [profilepara, setProfilePara] = useState("Your Profile is Incomplete");
  const [title, setTitle] = useState("Welcome To Expense Tracker");
  const [expense, setExpense] = useState([]);
  const firebaseUrl="https://expanse-tracker-50dd1-default-rtdb.firebaseio.com/expenses";

 
  const addExpense = async (expenseData) => {      //Add Expense
    try {
      const res = axios.post(`${firebaseUrl}.json`,expenseData)
      getExpenseData();
    } catch (error) {
      console.error('Error posting data:', error); 
    }
  };
  const getExpenseData= async ()=>{   //get Expense
    try{
      const res =await axios.get(`${firebaseUrl}.json`);
      const fetchedExpenseData=[];
      for(let key in res.data){
        fetchedExpenseData.push({
          id:key,
          amount:res.data[key].amount,
          description:res.data[key].description,
          category:res.data[key].category
        })
      }
      setExpense(fetchedExpenseData);
      
    }
    catch(error){
      console.log(error);
    }
  }
  const deleteExpense = async(id)=>{
    try{
      const res = await axios.delete(`${firebaseUrl}/${id}.json`);
      console.log(res);
      getExpenseData();

    }catch(error){
      console.log(error)

    }
    
  }
  const editExpense=async (id,expenseData)=>{
    try{
      const res = await axios.patch(`${firebaseUrl}/${id}.json`,{expenseData});
      console.log(res)
      console.log()
      
      getExpenseData();

    }
    catch(error){
      console.log(error)
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
    expense,
    deleteExpense,editExpense
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
