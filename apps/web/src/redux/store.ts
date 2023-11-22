import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import profileSlice from "./profileSlice";
import historySlice from "./historySlice";

const rootReducer = combineReducers({
  user: userSlice,
  profile: profileSlice,
  history: historySlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
