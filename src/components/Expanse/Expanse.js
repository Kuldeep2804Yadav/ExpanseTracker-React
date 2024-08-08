import React from "react";

const Expanse = ({ expenseData }) => {
  return (
    <div className=" w-2/5 m-auto my-4 bg-gray-100 shadow-md rounded-lg border border-gray-300 p-2 text-gray-800">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center p-2 bg-gray-200 rounded-md border border-gray-400">
          <span className="font-medium text-gray-700">Category:</span>
          <span className="text-gray-900">{expenseData.category}</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-200 rounded-md border border-gray-400">
          <span className="font-medium text-gray-700">Description:</span>
          <span className="text-gray-900">{expenseData.description}</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-200 rounded-md border border-gray-400">
          <span className="font-medium text-gray-700">Amount:</span>
          <span className="text-gray-900">₹{expenseData.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Expanse;
