import styled from 'styled-components';
const Button = styled.input`
    background-color: ${props=>props.theme.mainLighter1};
    cursor: pointer;
    padding: 12px;
    font-family: 'Roboto Slab', sans-serif;
    font-size: inherit;
    border: none;
    outline: none;
    color: white;
    border-bottom: 2px solid #797979;

    &:hover{
        background-color: ${props=>props.theme.main};
    }

`;
export default Button;
