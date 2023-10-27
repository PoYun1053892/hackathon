import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
}

export const AuthSlice = createSlice({
  name: "authReducer",
  initialState: {
    token: "",
  } as AuthState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action?.payload;
    },
  },
});

type TPageState = {
  [key: string]: ReturnType<typeof AuthSlice.reducer>;
};

/** action */
export const authAction = AuthSlice.actions;

/** reducer */
export const authReducer = AuthSlice.reducer;

/** selector */
export const authSelector = {
  token: (state: TPageState): string => state?.[AuthSlice.name]?.token,
};
