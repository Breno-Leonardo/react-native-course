import {View} from 'react-native';
import {ContainerLogin} from '../styles/login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import {theme} from '../../../shared/themes/theme';
import {grayTheme} from '../../../shared/themes/colors';

const Login = () => {
  const handleOnPress = () => {
    console.log('handle');
  };
  return (
    <View>
      <ContainerLogin>
        <Input
          title="Email"
          placeholder="Digite seu email"
          margin="0px 0px 12px 0px"
        />
        <Input
          title="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          margin="0px 0px 12px 0px"
        />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress}></Button>
      </ContainerLogin>
    </View>
  );
};
export default Login;
