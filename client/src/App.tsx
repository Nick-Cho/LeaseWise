import React from 'react';
import { store } from './redux/store';

export const RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
