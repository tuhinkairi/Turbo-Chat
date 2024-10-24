import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Features/LoginSlice";

const store = configureStore({
    reducer: {
        theme: LoginSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

