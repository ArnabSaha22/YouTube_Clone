import { createSlice } from "@reduxjs/toolkit";

const VideoDetailsSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videoList: [],
  },
  reducers: {
    getVideoDetails: (state, action) => {
      state.videoList.push(action.payload);
    },
  },
});

export const {getVideoDetails} = VideoDetailsSlice.actions;
export default VideoDetailsSlice.reducer;
