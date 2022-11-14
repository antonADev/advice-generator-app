import { configureStore } from '@reduxjs/toolkit';

import adviceSliceReducer from '../features/adviceSlice';

export const store = configureStore({
  reducer: {
    adviceData: adviceSliceReducer,
  },
});
