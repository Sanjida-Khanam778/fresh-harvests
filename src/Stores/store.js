import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { api, publicApi } from "../Api/api";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [publicApi.reducerPath]: publicApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: ["register", "rehydrate"],
      },
    }).concat(api.middleware, publicApi.middleware),
});

export const parsistor = persistStore(store);
