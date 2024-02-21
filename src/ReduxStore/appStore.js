import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import VideoDetailsSlice from "./VideoDetailsSlice";


const appStore = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    videoSlice: VideoDetailsSlice
  },
});

export default appStore;
