import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { addExpense, updateExpense } from "../../contextApi/expenseSlice";

const ExpanseForm = ({ editMode, initialData = {} }) => {
  const [formData, setFormData] = useState({
    amount: initialData.amount || "",
    description: initialData.description || "",
    category: initialData.category || "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateExpense({ id: initialData.id, expenseData: formData }));
    } else {
      dispatch(addExpense(formData));
    }
  };

  return (
    <form
      className="w-2/5 m-auto mt-11 flex flex-col items-center bg-gray-300 border border-gray-800 shadow-lg rounded-lg p-6 text-center"
      onSubmit={handleSubmit}
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
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 w-2/3 ">
        <label
          htmlFor="description"
          className="block text-start font-bold text-xl mb-1"
        >
          Description :
        </label>
        <input
          id="description"
          type="text"
          className="w-full rounded-md border border-gray-800 px-2"
          value={formData.description}
          onChange={handleChange}
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
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="petrol">Petrol</option>
          <option value="Gym">Gym</option>
          <option value="Food">Food</option>
          <option value="Recharge">Recharge</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>

      <Button
        title={editMode ? "Update Expense" : "Add Expense"}
        type="submit"
      />
    </form>
  );
};

export default ExpanseForm;
