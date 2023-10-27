import { authAction, authReducer } from "@data/slice/authSlice";

export const reducers = {
  authReducer,
};

export const actions = {
  ...authAction,
};
