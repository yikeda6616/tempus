import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/todo';

export default createStore(reducer, applyMiddleware(thunk));
