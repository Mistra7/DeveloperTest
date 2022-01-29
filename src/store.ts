import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [promise, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
