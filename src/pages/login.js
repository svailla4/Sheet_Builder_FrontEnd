import React from 'react';
import Register from '../blocks/Register';
import InputBox from '../components/InputBox';
import regexUtils from '../utils/regexUtils';
import axios from 'axios';
import { useState } from 'react';
import configs from '../configs';
import FormError from '../components/FormError';
import { withRouter } from 'react-router-dom';

function BaseComponent({history}) {
	const [email, setEmail] = useHandleInputChange('');
	const [password, setPassword] = useHandleInputChange('');
	const [loginError, setLoginError] = useState('');
	const { errors, onSubmit } = useOnSubmit(email, password, setLoginError, history);

	return (
		<Register>
			<Register.Center>
				<form>
					<Register.Box>
						<Register.Title>Login Account</Register.Title>
						{loginError.length>0 && <FormError>{loginError}</FormError>}
						<InputBox error={errors.email} value={email} onChange={setEmail}>Email</InputBox>
						<InputBox error={errors.password} value={password} onChange={setPassword} mask>Password</InputBox>
						<Register.Button onClick={onSubmit} type="submit" value="Login to your Sheet Builder account" />
					</Register.Box>
				</form>
			</Register.Center>
		</Register>
	);
}

function useHandleInputChange(initialState) {
	const [value, setValue] = useState(initialState);

	const handleInputChange = (e) => {
		setValue(e.target.value);
	};
	return [value, handleInputChange];
}

function useOnSubmit(email, password, setLoginError, history) {
	const initialState =
	{
		email: '',
		password: ''
	};

	const [errors, setErrors] = useState(initialState);

	const onSubmit = async (e)=>{
		e.preventDefault();
		let result = {};
		result.email = regexUtils.isEmailFormatValid(email);
		result.password = password.length<1? 'Please Enter a password':'';
		setErrors(result);

		if(result.email.length ===0
			&& result.password.length ===0){

			try{
				let response = await axios.post((`${configs.urlPrefix}/login`),{
					email,
					password
				});

				if(response.status === 200){
					history.push('/build');
				}
				else{
					setLoginError(response.message);
				}
			}catch(err){
				setLoginError(err.message);
			}
		}
	};

	return {
		errors, 
		onSubmit
	};
}


export default withRouter(BaseComponent);