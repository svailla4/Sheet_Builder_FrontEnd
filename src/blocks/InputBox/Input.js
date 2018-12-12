import styled from 'styled-components';

const Input = styled.input`
    display: block;
    margin-top: 5px;
    padding: 10px;
    font-size:inherit;
    border: 1px solid ${props=>props.error?'#cc0000':'#cfcfcf'};
    font-family: 'Roboto Slab', sans-serif;
    outline: none;
`;
export default Input;