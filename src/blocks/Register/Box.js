import styled from 'styled-components';
import Flex from '../../components/Flex';

const Box = styled(Flex)`
    border: 1px ${props=>props.theme.border} solid;
    border-radius: 4px;
    flex-direction: column;
    min-width:348px;
    padding:15px;
`;

export default Box;