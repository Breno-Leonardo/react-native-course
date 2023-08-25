import styled from 'styled-components/native';
import {theme} from '../../themes/theme';
import {Icon} from '../../icon/Icon';

export const ContainerModal = styled.View`
  background-color: ${theme.colors.neutralTheme.white};
  border-radius: 16px;
  
  padding: 16px;
  margin: 16px;
  z-index: 9;
  shadow-opacity: 1;
  shadow-radius: 10px;
  shadow-color: black;
  elevation:15;
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
