import styled from 'styled-components/native';
import {grayTheme, neutralTheme} from '../../themes/colors';
import {theme} from '../../themes/theme';
import {Icon} from '../../icon/Icon';

interface ContainerInputProps {
  isError?: boolean;
  secureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput.attrs({
  placeholderTextColor: grayTheme.gray80,
})<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: ${(props: ContainerInputProps) =>
    props.secureTextEntry != null ? '16px 55px 16px 16px' : '16px'};
  background-color: ${neutralTheme.white};
  color: ${neutralTheme.black};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props: ContainerInputProps) =>
    props.isError ? theme.colors.orangeTheme.orange80 : grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

export const IconSearch = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
