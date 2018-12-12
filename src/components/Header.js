import React from 'react';
import {Link} from 'react-router-dom';
import mainLogo from '../images/logo.svg';
import dropDownImg from '../images/dropDownTriangle.svg';
import Header from '../blocks/Header';
import { useState, useEffect, useRef } from 'react';

const BaseComponent = () => {
	const ref = useRef(null);
	const {showNavDropdown,toggleNavDropDown} = useNavDropDown(ref);
	return (
		<Header>
			<Header.Logo.Container>
				<Link to="/">
					<Header.Logo src={mainLogo} width="100" height="45" alt="logo" />
				</Link>
			</Header.Logo.Container>
			<Header.About>
				<Header.About.Link to="/about">About</Header.About.Link>
			</Header.About>
			<Header.Dropdown>
				<Header.Dropdown.Button ref={ref} onClick={toggleNavDropDown}>
					<Header.Dropdown.InnerContainer>
						<Header.Dropdown.Title>My Account</Header.Dropdown.Title>
						<img src={dropDownImg} alt="" width="8.6" height="5.0" />
					</Header.Dropdown.InnerContainer>
				</Header.Dropdown.Button>
				<Header.Dropdown.Content>
					{showNavDropdown && <Header.Dropdown.Link to="/login">Login</Header.Dropdown.Link>}
					{showNavDropdown && <Header.Dropdown.Link to="/register">Register</Header.Dropdown.Link>}
				</Header.Dropdown.Content>
			</Header.Dropdown >
		</Header>);
};

const useNavDropDown = (ref) => {
	const [showNavDropdown, setShowNavDropdown] = useState(false);

	const handleClickOutside = (e) => {
		if (ref && !ref.current.contains(e.target) && showNavDropdown) {
			setShowNavDropdown(!showNavDropdown);
		}
	};

	const toggleNavDropDown = ()=>{
		setShowNavDropdown(!showNavDropdown);
	};

	useEffect(()=>{
		document.addEventListener('click', handleClickOutside, true);
		return ()=>{
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return {
		showNavDropdown,
		toggleNavDropDown
	};
};

export default BaseComponent;