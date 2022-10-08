import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
