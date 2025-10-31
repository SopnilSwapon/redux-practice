import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Counter = {
  id: number;
  value: number;
};

const initialState: Counter[] = [
  { id: 1, value: 40 },
  { id: 2, value: 30 },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        state[index].value += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        state[index].value -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
