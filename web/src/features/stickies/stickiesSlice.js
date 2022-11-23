import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./mockStickies";

export const stickiesSlice = createSlice({
	name: "stickies",
	initialState,
	reducers: {
		deleteSticky: (state, action) => {
			return state.filter((s) => s.id !== action.payload);
		},
	},
});

export const selectStickies = (state) => state.stickies;

export const { addSticky, deleteSticky } = stickiesSlice.actions;

export default stickiesSlice.reducer;
