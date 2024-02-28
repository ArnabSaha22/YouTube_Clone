import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import VideoDetailsSlice from "./VideoDetailsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  sideBar: SideBarSlice,
  videoSlice: VideoDetailsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer : persistedReducer
});

export default appStore;
