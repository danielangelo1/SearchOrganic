import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProductProps } from "../components/cardProduct/CardProduct";

export interface cartState {
  products: CardProductProps[];
}

const initialState = {
  products: [
    {
      imgsrc: "",
      name: "",
      price: "",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartState>) => {
      console.log(action.payload.products[0]);
      state.products.push(action.payload.products[0]);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
