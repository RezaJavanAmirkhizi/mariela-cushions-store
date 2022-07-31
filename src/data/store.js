import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import usersReducer from "./reducers/userReducer";

const store = configureStore({
	reducer: {
		products: productsReducer,
		users: usersReducer
	},
});

export default store;
