import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

//REDUCERS :::
import userr from "./User";

const reducers = combineReducers({ userr });

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["userr"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
