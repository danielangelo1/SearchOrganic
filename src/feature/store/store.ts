import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../feature/loginSlice";
import cartReducer from "../../feature/cartSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
