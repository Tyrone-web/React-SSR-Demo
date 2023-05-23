// import { createStore, applyMiddleware } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function createStoreInstance(preLoadedState = {}) {
    return createStore(reducer, preLoadedState, applyMiddleware(thunk));
}