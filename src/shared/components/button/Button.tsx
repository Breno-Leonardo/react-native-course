import {Text, TouchableOpacityProps} from 'react-native';
import {ButtonContainer} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  margin?: string;
}

const Button = ({...props}: ButtonProps) => {
  return (
    <ButtonContainer margin={props.margin} {...props}>
      <Text>{props.title}</Text>
    </ButtonContainer>
  );
};
export default Button;
