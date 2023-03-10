import {combineReducers} from 'redux';
import descriptionSlice from '../screens/Description/descriptionSlice';
import scannerSlice from '../screens/Scanner/scannerSlice';

const appReducer = combineReducers({
  description: descriptionSlice,
  scanner: scannerSlice,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
