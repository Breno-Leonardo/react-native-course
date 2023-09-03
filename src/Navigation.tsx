import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './modules/login';
import Home from './modules/home';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from './shared/icon/Icon';
import {theme} from './shared/themes/theme';
import Profile from './modules/profile';
import Orders from './modules/orders';
import Product from './modules/product';
import Cart from './modules/cart';

const Stack = createNativeStackNavigator();

export enum ROUTES {
  HOME = 'Home',
  TAB = 'TAB',
  LOGIN = 'Login',
  SPLASH = 'Splash',
  CREATE_USER = 'CreateUser',
  PROFILE = 'Profile',
  ORDERS = 'Orders',
  PRODUCT = 'Product',
  CART= 'Cart',
}
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          } else if (route.name === 'Orders') {
            iconName = 'books';
          }
          else if (route.name === 'Cart') {
            iconName = 'cart'; 
          }

          return <Icon name={iconName} size={20} color={color}></Icon>;
        },
        tabBarActiveTintColor: theme.colors.mainTheme.primary,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarStyle: {
          height: 52,
          padding: 8,
          backgroundColor: theme.colors.neutralTheme.white,
        },
        tabBarLabelStyle: {
          marginBottom: 8,
        },
      })}>
      <Tab.Screen name={ROUTES.HOME} component={Home} options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.ORDERS} component={Orders} options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.CART} component={Cart} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.SPLASH} component={Splash} options={{headerShown: false}} />
        <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{headerShown: false}} />
        <Stack.Screen name={ROUTES.PRODUCT} component={Product} options={{headerShown: false}} />
        <Stack.Screen
          name={ROUTES.CREATE_USER}
          component={CreateUser}
          options={{title: 'Criar usuário', headerShown: true}}
        />
        <Stack.Screen
          name={ROUTES.TAB}
          component={TabNavigation}
          options={{title: 'Home', headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
