import { combineReducers } from 'redux';
import sessionErrorsReducers from './session_errors_reducer';

const errorsReducer = combineReducers({
    sessionError: sessionErrorsReducers
})

export default errorsReducer;