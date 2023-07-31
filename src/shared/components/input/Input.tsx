import {TextInputProps} from 'react-native/types';
import {ContainerInput} from './input.style';

interface InputProps extends TextInputProps {}

const Input = ({...props}: InputProps) => {
  return <ContainerInput {...props}></ContainerInput>;
};

export default Input;
