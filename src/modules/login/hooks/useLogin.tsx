import axios from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {connectionAPIPost} from '../../../shared/functions/connection/connectionAPI';
import {useRequest} from '../../../shared/hooks/useRequest';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import useNavigate from '../../../shared/hooks/useNavigate';
import { ROUTES } from '../../../Navigation';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {navigateTo} = useNavigate();
  const {user} = useSelector((state: RootState) => state.userReducer);
  const {loading, errorMessage, authRequest, setErrorMessage} = useRequest();

  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleGoToCreateUser = () => {
    navigateTo(ROUTES.CREATE_USER,true)
  };
  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };
  return {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    loading,
    errorMessage,
    handleOnPress,
    handleGoToCreateUser,
  };
};
