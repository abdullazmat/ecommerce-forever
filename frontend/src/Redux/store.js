import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Combine your reducers here
const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
});

const persistConfig = {
  key: "root", // key to persist the root state
  storage, // storage engine
  version: 1, // version of the persisted state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer for the root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
