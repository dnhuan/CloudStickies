import { createSlice } from "@reduxjs/toolkit";

export const stickiesSlice = createSlice({
	name: "stickies",
	initialState: {
		stickies: ["First Sticky"],
	},
	reducers: {
		addSticky: (state, action) => {
			state.stickies.push(action.payload);
		},
		deleteSticky: (state, action) => {
			state.stickies.splice(action.payload, 1);
		},
	},
});

export const selectStickies = (state) => state.stickies.stickies;

export const { addSticky, deleteSticky } = stickiesSlice.actions;

export default stickiesSlice.reducer;
