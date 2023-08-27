import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import {connectionAPIPost} from '../functions/connection/connectionAPI';
import {ReturnLogin} from '../types/returnLogin';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<ReturnLogin>();
  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.0.195:8080/auth', body)
      .then(result => {
        setUser(result);
      })
      .catch(err => {
        setErrorMessage('Usuário ou senha inválido');
        console.log(err);
      });

    setLoading(false);
  };
  return {
    loading,
    errorMessage,
    authRequest,
    user,
    setErrorMessage
  };
};
