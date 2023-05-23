import { combineReducers } from 'redux';
import homeReducer from '../reducers/home';
import personalReducer from '../reducers/personal';

export default combineReducers({
    home: homeReducer,
    personal: personalReducer
});