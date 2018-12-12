import styled from 'styled-components';
import Flex from '../../components/Flex';
import {Link} from 'react-router-dom';


const About = styled(Flex.Item)`
    margin-left:auto;
`;

const LinkStyled = styled(Link)`
    color: inherit;
    font-weight: bold;
    font-size:inherit;
    text-decoration:none;
    cursor:pointer;
`;

About.Link = LinkStyled;

export default About;