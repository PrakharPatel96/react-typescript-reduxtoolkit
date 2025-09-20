import type { RootState } from "../store";

export const selectUserList = (state: RootState) => state.userList.users;
export const selectShowRenderer = (state: RootState) =>
  state.userList.showRenderer;
