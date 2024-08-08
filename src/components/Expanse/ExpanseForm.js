import React, { useContext, useRef} from "react";
import Button from "../UI/Button";
import { Context } from "../../contextApi/Context";

const ExpanseForm = () => {

  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const {handleExpenseData}=useContext(Context);

  const expenseFormSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    
    handleExpenseData(newExpense);
    
  };

  return (
    <form
      className="w-2/5 m-auto mt-11 flex flex-col items-center bg-gray-300 border border-gray-800 shadow-lg rounded-lg p-6 text-center"
      onSubmit={expenseFormSubmit}
    >
      <div className="mb-4 w-2/3">
        <label
          htmlFor="amount"
          className="block text-start font-bold text-xl mb-1"
        >
          Amount :
        </label>
        <input
          id="amount"
          type="number"
          className="w-full rounded-md border border-gray-800 p-0.5"
          ref={amountRef}
        />
      </div>
      <div className="mb-4 w-2/3">
        <label
          htmlFor="description"
          className="block text-start font-bold text-xl mb-1"
        >
          Description :
        </label>
        <input
          id="description"
          type="text"
          className="w-full rounded-md border border-gray-800 p-0.5"
          ref={descriptionRef}
        />
      </div>
      <div className="mb-4 w-2/3">
        <label
          htmlFor="category"
          className="block text-start font-bold text-xl mb-1"
        >
          Expense Category :
        </label>
        <select
          id="category"
          className="w-full rounded-md border border-gray-800 p-0.5"
          ref={categoryRef}
        >
          <option value="">Select a category</option>
          <option value="petrol">Petrol</option>
          <option value="Gym">Gym</option>
          <option value="Food">Food</option>
          <option value="Recharge">Recharge</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>
      <Button title="Add Expense" type="submit" />
    </form>
  );
};

export default ExpanseForm;
