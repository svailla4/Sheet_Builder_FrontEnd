import React from 'react';
import Register from '../blocks/Register';
import InputBox from '../components/InputBox';
import regexUtils from '../utils/regexUtils';
import axios from 'axios';
import { useState } from 'react';
import configs from '../configs';
import FormError from '../components/FormError';
import {withRouter} from 'react-router-dom';


function BaseComponent({history}) {
	const [name, setName] = useHandleInputChange('');
	const [email, setEmail] = useHandleInputChange('');
	const [password, setPassword] = useHandleInputChange('');
	const [passwordAgain, setPasswordAgain] = useHandleInputChange('');
	const [registerError, setRegisterError] = useState('');
	const { errors, onSubmit } = useOnSubmit(name, email, password, passwordAgain, setRegisterError, history);

	return (
		<Register>
			<Register.Center>
				<form>
					<Register.Box>
						<Register.Title>Create Account</Register.Title>
						{registerError.length>0 && <FormError>{registerError}</FormError>}
						<InputBox error={errors.name} value={name} onChange={setName}>Your Name</InputBox>
						<InputBox error={errors.email} value={email} onChange={setEmail}>Email</InputBox>
						<InputBox error={errors.password} value={password} onChange={setPassword} mask>Password</InputBox>
						<InputBox error={errors.passwordAgain} value={passwordAgain} onChange={setPasswordAgain} mask hint="Passwords must consist of at least 8 characters.">Password Again</InputBox>
						<Register.Button onClick={onSubmit} type="submit" value="Register your Sheet Builder account" />
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

function useOnSubmit(name, email, password, passwordAgain, setRegisterError, history) {
	const initialState =
	{
		email: '',
		name: '',
		password: '',
		passwordAgain: ''
	};

	const [errors, setErrors] = useState(initialState);

	const onSubmit = async (e)=>{
		e.preventDefault();
		let result = {};
		result.email = regexUtils.isEmailFormatValid(email);
		result.name = regexUtils.isFormatValid(name);
		result.password = regexUtils.isPasswordFormatValid(password);
		result.passwordAgain = regexUtils.isPasswordAgainValid(password,passwordAgain);
		setErrors(result);

		if(result.email.length ===0
			&& result.name.length ===0
			&& result.password.length ===0
			&& result.passwordAgain.length ===0){

			try{
				let response = await axios.post((`${configs.urlPrefix}/register`),{
					name,
					email,
					password
				});

				if(response.status === 200){
					history.push('/build');
				}
				else{
					setRegisterError(response.message);
				}
			}catch(err){
				setRegisterError(err.message);
			}


		}
	};

	return {
		errors, 
		onSubmit
	};
}


export default withRouter(BaseComponent);