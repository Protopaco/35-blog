import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devTools-extension';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools());

export default store;
