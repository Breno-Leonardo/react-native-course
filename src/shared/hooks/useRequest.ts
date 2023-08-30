import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import ConnectionAPI, {MethodType, connectionAPIPost} from '../functions/connection/connectionAPI';
import {ReturnLogin} from '../types/returnLogin';
import {useUserReducer} from '../../store/reducers/userReducer/useUserReducer';
import {useGlobalReducer} from '../../store/reducers/globalReducer/useGlobalReducer';
import {ROUTES} from '../../Navigation';

import {URL_LOGIN} from '../constants/constantsUrls';
import useNavigate from './useNavigate';
import { setAuthorizationToken } from '../functions/connection/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTHORIZATION_KEY } from '../constants/constants';


interface requestProps<T> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: unknown;
  message?: string;
}

export const useRequest = () => {
  const {navigateTo} = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {setModal} = useGlobalReducer();
  const {setUser} = useUserReducer();
  
  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then(result => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso',
            text: message,
          });
        }
        return result;
      })
      .catch(err => {
        setModal({
          visible: true,
          title: 'Erro',
          text: err.message,
        });

        return undefined;
      });
    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>(URL_LOGIN, body)
      .then(  async (result) => {
        setUser(result.user);
        if (result && result.accessToken) {
            await AsyncStorage.setItem(AUTHORIZATION_KEY,result.accessToken)
        }
        
        navigateTo(ROUTES.HOME);
      })
      .catch(err => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválido',
        });
        //setErrorMessage('Usuário ou senha inválido');
        console.log(err);
      });

    setLoading(false);
  };
  return {
    loading,
    errorMessage,
    authRequest,
    request,
    setErrorMessage,
  };
};
