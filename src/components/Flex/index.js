import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
`;

const Item = styled.div`
    flex-shrink: ${props=>props.shrink? 1: 0 };
    flex-grow: ${props=>props.grow? 1: 0 };
`;

Flex.Item = Item;

export default Flex;
