import React, {useEffect} from 'react';
import axios from 'axios';
import configs from '../configs';


const Build = ()=>{
	useEffect(()=>{
		axios.get(`${configs.urlPrefix}/sheets`);
	},[]);

	return(
		<div>Build site</div>
	);
};

export default Build;