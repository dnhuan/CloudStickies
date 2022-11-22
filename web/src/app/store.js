import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import stickiesReducer from "../features/stickies/stickiesSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		stickies: stickiesReducer,
	},
});
