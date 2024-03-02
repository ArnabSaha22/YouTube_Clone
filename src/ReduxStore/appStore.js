import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import VideoDetailsSlice from "./VideoDetailsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import LiveChatSlice from "./LiveChatSlice";

//Adding redux persist so that the videos don't get removed from the redux store on page refresh.
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["chatSlice"], //Blacklisting chatSlice as we want the live chat messages to get removed on refresh 
};

const rootReducer = combineReducers({ //Mapping the slices
  sideBar: SideBarSlice,
  videoSlice: VideoDetailsSlice,
  chatSlice: LiveChatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({ //Configuring the redux store
  reducer: persistedReducer,
});

export default appStore;
