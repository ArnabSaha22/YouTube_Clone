import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";

const appStore = configureStore({
  reducer: {
    sideBar: SideBarSlice,
  },
});

export default appStore;
