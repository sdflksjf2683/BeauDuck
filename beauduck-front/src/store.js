import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import consultingReducer from './features/help/ConsultingSlice';
import boardReducer from './features/board/BoardSlice';
import singleReducer from './features/single/SingleSlice';

const reducers = combineReducers({
  consulting: consultingReducer,
  board: boardReducer,
  single: singleReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
