import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsReducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'contactList',
  storage,
};

const rootReducer = combineReducers({ contactList: contactsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };