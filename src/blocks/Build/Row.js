import styled from 'styled-components';
import Flex from '../../components/Flex';

const Row = styled(Flex.Item)`
	display:flex;
	flex-direction:row;
	flex-wrap:nowrap;
	width:100%;
	justify-content:flex-start;
	border: 1px ${props=>props.theme.border} solid;
`;

export default Row;
