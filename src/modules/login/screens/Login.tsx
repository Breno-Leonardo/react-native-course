import {Text, View} from 'react-native';
import {ContainerLogin} from '../styles/login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

const Login = () => {
  const handleOnPress = () => {
    console.log('handle');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress}></Button>
      </ContainerLogin>
    </View>
  );
};
export default Login;
