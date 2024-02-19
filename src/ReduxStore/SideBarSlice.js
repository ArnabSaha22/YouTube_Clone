import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "SideBar",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    showSideBarExtended: (state) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { showSideBarExtended } = SideBarSlice.actions;
export default SideBarSlice.reducer;
