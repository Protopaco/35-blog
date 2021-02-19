import { createStore } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools());

export default store;
