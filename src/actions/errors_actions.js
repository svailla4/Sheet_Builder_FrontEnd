export const TOGGLE_ERROR = "TOGGLE_ERROR";
export const SHOW_ERROR = "SHOW_ERROR";


export const togglePosts = ()=>{
	return (dispatch, getState)=>{
		let {show} = getState().errors;
		dispatch(showPosts(!show));
	};
};

const showPosts= (show)=>
	({
		type: SHOW_ERROR,
		payload: show

	});