export default {
	isEmailFormatValid: (email)=>{
		let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email format
        
		if( !(email && email.trim().length>0 && re.test(email))){
			return 'A valid email is required';
		}
		else{
			return '';
		}
	}, //verify the email format

	isPasswordFormatValid: (password)=>{
		let re =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // one special character, one number, and one letter

		if(!password || password.trim().length < 8){
			return 'Passwords must consist of at least 8 characters.';
		}
		else if(!(password.trim().length>0 && re.test(password))){
			return 'Passwords must contain one special character and number';
		}
		else{
			return '';
		}
	},

	isFormatValid:(input, text='A valid input is required')=>{
		if(!(input && input.trim().length > 1)){ //most names should be longer than one character
			return text;
		}else{
			return '';
		}
	},

	isPasswordAgainValid: (password, passwordAgain)=>{
		if(!passwordAgain){
			return 'Password again field is empty';
		}
		else if( password === passwordAgain){
			return '';
		}else{
			return 'Passwords do not match';
		}
	}
};