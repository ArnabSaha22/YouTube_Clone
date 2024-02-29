import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import VideoDetailsSlice from "./VideoDetailsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import LiveChatSlice from "./LiveChatSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["chatSlice"],
};

const rootReducer = combineReducers({
  sideBar: SideBarSlice,
  videoSlice: VideoDetailsSlice,
  chatSlice: LiveChatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,
});

export default appStore;
