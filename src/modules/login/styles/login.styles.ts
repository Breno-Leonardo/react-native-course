import styled from 'styled-components/native';
import { neutralTheme } from '../../../shared/themes/colors';

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${neutralTheme.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ImageLogo = styled.Image`
  width: 150px;
  height: 100px;
  margin-bottom: 24px;
`;