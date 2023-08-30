import { View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styles/login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

import {useLogin} from '../hooks/useLogin';
import { useEffect } from 'react';
import { getAuthorizationToken, setAuthorizationToken } from '../../../shared/functions/connection/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTHORIZATION_KEY } from '../../../shared/constants/constants';

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
