import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  login: string;
  token: string;
}

const initialState = {
  login: '',
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginState>) => {
      state.login = action.payload.login;
      state.token = action.payload.token;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
