import { createSlice } from "@reduxjs/toolkit";
import { defaultOptions, requiredOptions } from "../constantData";
import { showMessage } from "../../utils/showMessage";

const initialState = {
  defaultOptions,
  requiredOptions,
};

const optionsSlice = createSlice({
  name: "optionsSlice",
  initialState: initialState,
  reducers: {
    handleOptionsChanges: (state, action) => {
      const { name } = action.payload.target;
      if (name === "autoClose" && state.defaultOptions.autoClose === false) {
        state.defaultOptions.autoClose = Number(state.requiredOptions.interval);
      } else {
        state.defaultOptions[name] = !state.defaultOptions[name];
      }
    },
    handleAutoClose: (state, action) => {
      state.requiredOptions.interval = action.payload;
      state.defaultOptions.autoClose = Number(state.requiredOptions.interval);
    },
    handlePositionAndTheme: (state, action) => {
      const { name, value } = action.payload.target;
      state.defaultOptions[name] = value;
    },
    handleMessageContentAndType: (state, action) => {
      const { name, value } = action.payload.target;
      state.requiredOptions[name] = value;
    },
    handleSubmit: (state) => {
      showMessage(
        state.requiredOptions.type,
        state.requiredOptions.messageContent,
        state.defaultOptions
      );
    },
  },
});
export const {
  handleOptionsChanges,
  handleAutoClose,
  handlePositionAndTheme,
  handleMessageContentAndType,
  handleSubmit,
} = optionsSlice.actions;
export default optionsSlice.reducer;
