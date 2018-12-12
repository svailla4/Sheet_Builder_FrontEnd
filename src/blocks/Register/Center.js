import styled from 'styled-components';

const Center = styled.div`
    grid-area: center;
    display:flex;

    @media(min-width: 447px){
        justify-content:center;
    }
`;

export default Center;