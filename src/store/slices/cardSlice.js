import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    sortCards: (state) => {
      state.sort((a, b) => a - b);
    },
    deleteCard: (state, action) => {
      return state.filter((card) => card !== action.payload);
    },
  },
});

export const { addCard, sortCards, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
