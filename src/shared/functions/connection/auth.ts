import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {AUTHORIZATION_KEY} from '../../constants/constants';
import {ROUTES} from '../../../Navigation';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token: string) =>
  setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = async () =>  getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
  unsetAuthorizationToken();
  navigate.reset({
    index: 0,
    routes: [{name: ROUTES.LOGIN}],
  });
};
