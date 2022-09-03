import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "geekConnect",
  initialState: {
    toggle: true,
  },
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle } = slice.actions;
export default slice.reducer;
