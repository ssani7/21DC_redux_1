import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
