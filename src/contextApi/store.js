import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from './auth';
import expenseReducer from './expenseSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer
  },
});

export default store;
