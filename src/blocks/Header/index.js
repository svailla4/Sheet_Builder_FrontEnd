import styled from 'styled-components';
import Logo from './Logo';
import About from './About';
import Dropdown from './Dropdown';

const Header = styled.div`
	display: flex;
	align-items:center;
	background:${props=>props.theme.main}; 
	margin:0px;
	font-size:1.0em;
	color: white;
`;

Header.Logo = Logo;
Header.About = About;
Header.Dropdown = Dropdown;


export default Header;