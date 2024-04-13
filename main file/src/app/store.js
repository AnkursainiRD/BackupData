import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/ProductList/ProductSlice"
import authReducer from "../features/Auth/AuthSlice"
import cartReducer from "../features/cart/CartSlice"
import orderReducer from "../features/order/OrderSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
  },
});
