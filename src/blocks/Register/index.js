import styled from 'styled-components';
import Center from './Center';
import Item from './Item';
import Title from './Title';
import Button from './Button';
import Box from './Box';

const Register = styled.div`
    display: grid;
    grid-gap: 0px;
    grid-template-columns:  auto 700px auto;
    grid-template-areas: "... center ...";

    @media(max-width: 700px){
        grid-template-columns: 700px;
        grid-template-areas: "center";
    }
`;

Register.Center = Center; 
Register.Box = Box;
Register.Item = Item;
Register.Title = Title;
Register.Button = Button;

export default Register;