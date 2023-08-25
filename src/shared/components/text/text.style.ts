import styled from 'styled-components/native';
import {theme} from '../../themes/theme';
interface ContainerTextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
  customMargin?: string;
}
export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: ContainerTextProps) =>
    props.color ? `color: ${props.color};` : `color: ${theme.colors.neutralTheme.black};`};
  ${(props: ContainerTextProps) => (props.customMargin ? `margin: ${props.customMargin};` : ``)};
  font-family: ${(props: ContainerTextProps) => props.fontFamily};
  font-size: ${(props: ContainerTextProps) => props.fontSize};
`;
