import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import {connectionAPIPost} from '../functions/connection/connectionAPI';
import {ReturnLogin} from '../types/returnLogin';
import {useDispatch} from 'react-redux';
import {setUserAction} from '../../store/reducers/userReducer';
import {useUserReducer} from '../../store/reducers/userReducer/useUserReducer';
import {useGlobalReducer} from '../../store/reducers/globalReducer/useGlobalReducer';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {setModal} = useGlobalReducer();
  const {setUser} = useUserReducer();

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('http://192.168.0.195:8080/auth', body)
      .then(result => {
        setUser(result.user);
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
    setErrorMessage,
  };
};
