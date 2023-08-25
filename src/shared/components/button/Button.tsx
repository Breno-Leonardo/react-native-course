import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {ButtonContainer, ButtonSecondary, GradientButton} from './button.style';
import {textTypes} from '../text/textTypes';
import Text from '../text/Text';
import {theme} from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({...props}: ButtonProps) => {
  const handleOnPress = () => {
    if (!props.loading && !props.disabled && props.onPress) {
      props.onPress();
    }
  };
  const renderText = (color: string) => (
    <>
      {props.loading ? (
        <ActivityIndicator color={theme.colors.neutralTheme.white}></ActivityIndicator>
      ) : (
        <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
          {props.title}
        </Text>
      )}
    </>
  );
  if (props.type === theme.buttons.buttonsTheme.primary) {
    return (
      <ButtonContainer  margin={props.margin} {...props} onPress={handleOnPress}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonContainer>
    );
  } else if (props.type === theme.buttons.buttonsTheme.secondary) {
    return (
      <ButtonSecondary  margin={props.margin} {...props} onPress={handleOnPress}>
        {renderText(theme.colors.mainTheme.primary)}
      </ButtonSecondary>
    );
  } else {
    return (
      <ButtonContainer  margin={props.margin} {...props} onPress={handleOnPress}>
        <GradientButton
          colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          {renderText(theme.colors.neutralTheme.white)}
        </GradientButton>
      </ButtonContainer>
    );
  }
};
export default Button;
