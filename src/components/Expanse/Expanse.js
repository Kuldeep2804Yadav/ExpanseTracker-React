import React from 'react';
import Button from '../UI/Button';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteExpense, updateExpense } from '../../contextApi/expenseSlice';

const Expanse = ({ expenseData }) => {
  const dispatch = useDispatch();

  const editExpense = (id, expenseData) => {
    dispatch(updateExpense({ id, expenseData }));
  };

  return (
    <div className="w-2/5 my-6 bg-gray-300 m-auto flex justify-between items-center shadow-lg rounded-lg border border-gray-800 p-3 text-white">
      <div className="h-auto w-1/6 p-2 flex items-center justify-center border border-black rounded-md bg-purple-950">
        ₹{expenseData.amount}
      </div>
      <div className="  w-1/5 h-auto p-2 text-center border border-black rounded-md bg-gray-700">
        {expenseData.description}
      </div>
      <div className=" w-1/5 h-auto p-2 text-center border border-black rounded-md bg-gray-700">
        {expenseData.category}
      </div>
      <Button title={<FaEdit />} onClick={() => editExpense(expenseData.id, expenseData)} className=" w-1/10 " />
      <Button title={<MdDelete />} onClick={() => dispatch(deleteExpense(expenseData.id))} className="w-1/10 text-center" />
    </div>
  );
};

export default Expanse;
