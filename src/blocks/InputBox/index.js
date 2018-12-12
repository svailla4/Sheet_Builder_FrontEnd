import styled from 'styled-components';
import Flex from '../../components/Flex';
import Input from './Input';
import Title from './Title';

const InputBox = styled(Flex)`
    flex-direction: column;
    margin-bottom:14px;
`;

InputBox.Input = Input;
InputBox.Title = Title;

export default InputBox;
