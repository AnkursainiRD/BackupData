import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { careateOrder } from './OrderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:null,
};

export const careateOrderAsync = createAsyncThunk(
  'order/careateOrder',
  async (order) => {
    const response = await careateOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers:{
    resetOrder: (state)=>{
      state.currentOrder= null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(careateOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(careateOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder=action.payload;
      });
  },
});

export const { resetOrder } = orderSlice.actions;

export const selectCurrentOrder = (state) => state.order.currentOrderPlace;

export default orderSlice.reducer;
