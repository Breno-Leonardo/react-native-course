import {TouchableOpacity, View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styles/login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

import {useLogin} from '../hooks/useLogin';
import {useEffect} from 'react';
import {
  getAuthorizationToken,
  setAuthorizationToken,
} from '../../../shared/functions/connection/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTHORIZATION_KEY} from '../../../shared/constants/constants';
import Text from '../../../shared/components/text/Text';
import { theme } from '../../../shared/themes/theme';
import { textTypes } from '../../../shared/components/text/textTypes';

const Login = () => {
  const {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    loading,
    errorMessage,
    handleOnPress,
    handleGoToCreateUser
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

        <TouchableOpacity onPress={handleGoToCreateUser}>
          <Text margin="16px" color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLD}>Cadastrar usuário</Text>
        </TouchableOpacity>
        <Button loading={loading} margin="16px" title="ENTRAR" onPress={handleOnPress}></Button>
      </ContainerLogin>
    </View>
  );
};
export default Login;
