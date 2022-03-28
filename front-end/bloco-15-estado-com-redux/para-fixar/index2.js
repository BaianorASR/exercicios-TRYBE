// Arquivo index.js
import { combineReducers } from 'redux';
import { createStore } from 'redux';

import meuOutroReducer from './meuOutroReducer';
import meuReducer from './meuReducer';
import reducerCombinado from './reducers';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer,
});

const store = createStore(reducerCombinado);
console.log(store.getState());
