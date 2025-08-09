import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  token: string | null;
  username: string | null;
  email: string | null;
  photo: string | null;
}

const initialState = {
  username: null,
  email: null,
  photo: null,
  token: null,
} satisfies User as User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      (state.token = action.payload.token),
        (state.username = action.payload.username),
        (state.photo = action.payload.photo),
        (state.email = action.payload.email);
    },
    clearUser: (state) => {
      state.token = null;
      state.username = null;
      state.photo = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
