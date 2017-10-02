import {combineReducers} from 'redux';
import MessageReducer from './reducer-messages';

const allReducers = combineReducers({
    messages: MessageReducer
});

export default allReducers
