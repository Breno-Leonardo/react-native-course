import {TextInputProps} from 'react-native/types';
import {View} from 'react-native';
import {ContainerInput, IconEye} from './input.style';
import {DisplayFlexColumn} from '../globalStyles/globalView.style';
import Text from '../text/Text';
import {textTypes} from '../text/textTypes';
import {grayTheme, neutralTheme} from '../../themes/colors';
import {theme} from '../../themes/theme';
import {useState} from 'react';
import {Icon} from '../../icon/Icon';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?:string;
}

const Input = ({...props}: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!props.secureTextEntry);
  const handleOnPressEye = () => {
    setCurrentSecure(!currentSecure);
  };
  return (
    <DisplayFlexColumn margin={props.margin}>
      {props.title ? (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={neutralTheme.black}>
          {props.title}
        </Text>
      ) : (
        ''
      )}
      <View>
        <ContainerInput
          {...props}
          isError={props.errorMessage}
          secureTextEntry={currentSecure}></ContainerInput>
        {props.secureTextEntry ? (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}></IconEye>
        ) : (
          <></>
        )}
      </View>
      {props.errorMessage ? (
        <Text
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          margin="0px 0px 0px 8px">
          {props.errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
