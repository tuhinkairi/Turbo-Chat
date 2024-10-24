import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  name: string;
  email: string;
  url: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  name: "",
  email: "",
  url: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ email: string; name: string; url: string }>
    ) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      state.name = "";
      state.url = "";
    },
    test: () => {
      console.log("running");
    },
  },
});

export const { setCredentials, logIn, logOut, test } = loginSlice.actions;
export default loginSlice.reducer;
