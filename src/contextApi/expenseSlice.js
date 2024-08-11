import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const firebaseUrl = 'https://expanse-tracker-50dd1-default-rtdb.firebaseio.com/expenses';

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await axios.get(`${firebaseUrl}.json`);
  console.log('Fetched data:', response.data); 
  const fetchedExpenseData = [];
  for (let key in response.data) {
    fetchedExpenseData.push({
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      category: response.data[key].category,
    });

  }
  return fetchedExpenseData;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (expenseData) => {
  await axios.post(`${firebaseUrl}.json`, expenseData);
  return expenseData;
});

export const updateExpense = createAsyncThunk('expenses/updateExpense', async ({ id, expenseData }) => {
  await axios.put(`${firebaseUrl}/${id}.json`, expenseData);
  return { id, ...expenseData };
});


export const deleteExpense = createAsyncThunk('expenses/deleteExpense', async (id) => {
  await axios.delete(`${firebaseUrl}/${id}.json`);
  return id;
});

const initialState = {
  expenses: [],
  contactFormOpen: false,
  profilePara: 'Your Profile is Incomplete',
  title: 'Welcome To Expense Tracker',
  loading: false,
  
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setContactFormOpen(state, action) {
      state.contactFormOpen = action.payload;
    },
    setProfilePara(state, action) {
      state.profilePara = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
        state.loading = false;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.expenses.findIndex((expense) => expense.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setContactFormOpen, setProfilePara, setTitle } = expenseSlice.actions;
export default expenseSlice.reducer;
