import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  name: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  name: "",
  email: "",
  avatar: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ email: string; name: string; avatar: string }>
    ) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      state.name = "";
      state.avatar = "";
    },
    test: () => {
      console.log("running");
    },
  },
});

export const { setCredentials, logIn, logOut, test } = loginSlice.actions;
export default loginSlice.reducer;
