import { neutralTheme } from '../../themes/colors';
import { theme } from '../../themes/theme';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
  disabled?: boolean;
}
const opacityDisabled =0.2;
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props: ButtonContainerProps) => (props.disabled ? `opacity: ${opacityDisabled};` : '')}
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')}
  ${(props: ButtonContainerProps) => (props.disabled ? `opacity: ${opacityDisabled};` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props: ButtonContainerProps) => (props.disabled ? `opacity: ${opacityDisabled};` : '')}
`;
