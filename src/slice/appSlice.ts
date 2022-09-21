import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface appState {
  roomId: string | null;
}

// Define the initial state using that type
const initialState: appState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<appState>) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;


export default appSlice.reducer;
