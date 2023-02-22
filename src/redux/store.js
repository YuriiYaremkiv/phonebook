import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

import { phoneBookSliceReducer } from './contacts/phoneBookSliceReducer';
import { filterContactsReducer } from './contacts/filterContactsReducer';
import { themeModeSlice } from './theme/themeModeSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themeModePersistConfig = {
  key: 'themeMode',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: phoneBookSliceReducer.reducer,
    filter: filterContactsReducer.reducer,
    themeMode: persistReducer(themeModePersistConfig, themeModeSlice.reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
