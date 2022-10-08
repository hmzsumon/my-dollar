import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notices: [],
};

const noticeSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setNotices: (state, action) => {
      state.notices = action.payload.notices;
    },
  },
});

export const { setNotices } = noticeSlice.actions;
export default noticeSlice.reducer;
