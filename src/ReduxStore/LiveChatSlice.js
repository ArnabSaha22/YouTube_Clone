import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../Utils/Constants";

const LiveChatSlice = createSlice({
  name: "chat slice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessages } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
