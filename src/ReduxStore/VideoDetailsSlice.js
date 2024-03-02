import { createSlice } from "@reduxjs/toolkit";

//Video slice to add videos to the store.
const VideoDetailsSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videoList: [],
  },
  reducers: {
    getVideoDetails: (state, action) => { //Adding videos to the store
      state.videoList.push(action.payload);
    }, 
  },
});

export const {getVideoDetails} = VideoDetailsSlice.actions;
export default VideoDetailsSlice.reducer;
