import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProductProps } from "../components/cardProduct/CardProduct";

export interface cartState {
  product: CardProductProps;
}

const initialState = {
  product: {
    name: "",
    price: 0,
    imgsrc: "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartState>) => {
      state.product.name = action.payload.product.name;
      state.product.price = Number(action.payload.product.price);
      state.product.imgsrc = action.payload.product.imgsrc;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
