import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "rauth",
  storage,
};

const reducers = {};

const rootReducers = combineReducers(reducers);

const persistedReducer = persistReducer(config, rootReducers);

const store = createStore(rootReducers);
const persistedStore = persistStore(store);

export { store, persistedStore };
