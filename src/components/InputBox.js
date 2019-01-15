import InputBox from '../blocks/InputBox';
import styled from 'styled-components';
import React from 'react';

const Span = styled.span`
    font-size: 0.8em;
	${props=>props.error? `color: ${props.theme.error};` :''}
`;

const BaseComponent = ({ children, value, onChange, mask, hint, error }) => {
	const filteredHint = error.length>0? <Span error>{error}</Span>: <Span>{hint}</Span>;
	const type = mask? 'password': 'text';
	return (
		<InputBox>
			<InputBox.Title>{children}</InputBox.Title>
			<InputBox.Input error={error} type={type} value={value} onChange={onChange}></InputBox.Input>
			{filteredHint}
		</InputBox>
	);
};

export default BaseComponent;