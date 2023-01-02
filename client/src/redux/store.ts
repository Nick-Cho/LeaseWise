import { configureStore} from '@reduxjs/toolkit';

import {appReducer} from './reducers/appReducer.js';

const reducer = {
  appReducer: appReducer,
}

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

