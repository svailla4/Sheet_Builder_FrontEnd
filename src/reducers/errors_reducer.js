import {SHOW_ERROR} from '../actions/errors_actions';

function errors_reducer(
	state={
		show:false
	}, action
) {
	switch(action.type){	
	case SHOW_ERROR:
		return Object.assign({}, state,{
			show: action.payload
		});
	default:
		return state;
	}
}


export default errors_reducer;