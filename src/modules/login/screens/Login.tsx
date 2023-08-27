import {NativeSyntheticEvent, TextInputChangeEventData, View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styles/login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import {theme} from '../../../shared/themes/theme';
import {grayTheme} from '../../../shared/themes/colors';
import axios from 'axios';
import {useState} from 'react';
import {useLogin} from '../hooks/useLogin';

const Login = () => {
  const {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    loading,
    errorMessage,
    handleOnPress,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          resizeMode="contain"
          source={require('./../../../assets/images/logo.png')}></ImageLogo>
        <Input
          errorMessage={errorMessage}
          value={email}
          onChange={handleOnChangeEmail}
          title="Email"
          placeholder="Digite seu email"
          margin="0px 0px 12px 0px"
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          title="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          margin="0px 0px 12px 0px"
          onChange={handleOnChangePassword}
        />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress}></Button>
      </ContainerLogin>
    </View>
  );
};
export default Login;
