import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice';
// Importa aquí todos los demás reducers que necesites

const rootReducer = combineReducers({
  counter: counterReducer,
  // Añade otros reducers aquí
});

export default rootReducer;