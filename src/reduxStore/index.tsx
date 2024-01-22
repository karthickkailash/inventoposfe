import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const combinedReducer = combineReducers({
  app: appSlice,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
