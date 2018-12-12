import styled, {keyframes} from 'styled-components';

const fadein = keyframes`
	from{
		opacity: 0;
	}
	to{
		opacity:1;
	}
`;

const FormError = styled.span`
	color:#cc0000;
	font-size:0.9em;
	font-weight:bold;
	padding:5px 0px 15px 0px;
	animation: ${fadein} 1.0s 1;
`;

export default FormError;