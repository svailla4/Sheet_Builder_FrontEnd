import { combineReducers } from 'redux';
import errors_reducer from './errors_reducer';

const rootReducer = combineReducers({
	errors: errors_reducer
});
  
export default rootReducer;