import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { Product } from "../typings";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item.id.toString() === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Can't remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: number) => {
  state.basket.items.filter((item: Product) => item.id === id);
};

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
);

export default basketSlice.reducer;
