import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../contants/api_data";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT,1)
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
