import React from 'react';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setContactFormOpen, setTitle } from '../../contextApi/expenseSlice';
import { logout } from '../../contextApi/auth';
import { useNavigate } from 'react-router';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profilePara = useSelector((state) => state.expense.profilePara);
  const title = useSelector((state) => state.expense.title);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  const openHandler = () => {
    dispatch(setContactFormOpen(true));
    dispatch(setTitle('Winner never quit. Quitter never wins'));
  };

  return (
    <div className=" h-max text-black p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50 shadow-md">
      <div className="font-bold text-xl">{title}</div>
      <div className="h-10 flex items-center bg-gray-300 rounded-2xl p-3">
        <p className="mr-4">{profilePara}</p>
        <button
          className="mx-2 w-28 text-blue-800 hover:underline focus:outline-none"
          onClick={openHandler}
        >
          Complete Now
        </button>
        <Button title="Logout" className="py-0.5" onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
