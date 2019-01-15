import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Flex from '../../components/Flex';

const Dropdown = styled(Flex.Item)`
    position: relative;
`;

const Button = styled.button`
    background-color: ${props=>props.theme.main};
    color: ${props=>props.theme.foreground};
    padding: 16px;
    border: none;
    cursor: pointer;
    font-size:inherit;
`;

const LinkStyled = styled(Link)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover{
        background-color: ${props=>props.theme.foreground}
    }
`;
//Container for button text and image
const InnerContainer = styled(Flex)`
    align-items:center;
`;
//button title
const Title = styled.span`
    padding-right: 4px;
    font-weight:bold;
`;
// Dropdown content 
const Content = styled.div`
    position: absolute;
    background-color: ${props=>props.theme.foreground};
    left:0px;
    right:0px;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

Dropdown.Button = Button;
Dropdown.InnerContainer = InnerContainer;
Dropdown.Title = Title;
Dropdown.Content = Content;
Dropdown.Link = LinkStyled;

export default Dropdown;