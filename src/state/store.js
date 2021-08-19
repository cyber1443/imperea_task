import {combineReducers, createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AuthReducer from '../Login/state/reducer';
import FeedReducer from '../Feed/state/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = combineReducers({
  auth: AuthReducer,
  feed: FeedReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
