import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserProfile } from "../../utils/types/types";

interface UserListState {
  users: UserProfile[];
  showRenderer: boolean;
}

const initialState: UserListState = {
  users: [],
  showRenderer: false,
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUserList(state, action: PayloadAction<UserProfile[]>) {
      state.users = action.payload;
    },
    setToggleRenderer(state, action: PayloadAction<boolean>) {
      state.showRenderer = action.payload;
    },
  },
});

export const { setUserList, setToggleRenderer } = userListSlice.actions;

export default userListSlice.reducer;
