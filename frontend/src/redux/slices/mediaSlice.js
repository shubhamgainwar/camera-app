import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  videos: [],
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    addVideo: (state, action) => {
      state.videos.push(action.payload);
    },
  },
});

export const { addImage, addVideo } = mediaSlice.actions;
export default mediaSlice.reducer;
