// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Shreyasi',
  email: 'shreyasichatterg@gmail.com',
  avatarInitial: 'S',
  users: [], // Add this line
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatarInitial = action.payload.avatarInitial;
    },
    setUsers: (state, action) => { // Add this reducer
      state.users = action.payload;
    },
  },
});

export const { setUser, setUsers } = userSlice.actions; 
export default userSlice.reducer;
