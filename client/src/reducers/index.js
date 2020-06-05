import {combineReducers} from 'redux';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
    authReducer: authReducer,
    surveysReducer: surveysReducer
});