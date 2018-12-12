import styled from 'styled-components';
import Flex from '../../components/Flex';

const Logo = styled.img`
    padding-bottom:5px;
    padding-top:5px;
    cursor:pointer;
`;

const Container = styled(Flex)`
    flex-grow:0;
    flex-shrink:0;
    justify-content: center;
`;

Logo.Container = Container;

export default Logo;