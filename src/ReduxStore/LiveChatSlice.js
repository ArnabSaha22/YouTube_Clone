import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../Utils/Constants";

//Live chat messages slice
const LiveChatSlice = createSlice({
  name: "chat slice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => { //adding messages to the store.
      state.messages.splice(OFFSET_LIVE_CHAT, 1); //removing extra messages beyond the offset to avoid page overload.
      state.messages.push(action.payload); //Pushing messages to the store
    },
    removeMessages: (state, action) => {
      state.messages.splice(0, state.messages.length); //Removing all the messages on page refresh
    },
  },
});

export const { addMessages, removeMessages } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
