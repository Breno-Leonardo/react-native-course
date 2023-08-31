import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './modules/login';
import Home from './modules/home';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';

const Stack = createNativeStackNavigator();

export enum ROUTES {
  HOME = 'Home',
  LOGIN = 'Login',
  SPLASH = 'Splash',
  CREATE_USER = 'CreateUser',
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{title: 'Criar usuário', headerShown: true}}
        />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
