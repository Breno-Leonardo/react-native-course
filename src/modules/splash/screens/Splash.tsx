import {useEffect} from 'react';
import {URL_USER} from '../../../shared/constants/constantsUrls';
import {ImageLogo} from '../../login/styles/login.styles';
import {ContainerSplash} from '../styles/splash.styles';
import {useRequest} from '../../../shared/hooks/useRequest';
import {MethodEnum} from '../../../shared/enums/methods.enum';
import {useUserReducer} from '../../../store/reducers/userReducer/useUserReducer';
import {ROUTES} from '../../../Navigation';
import useNavigate from '../../../shared/hooks/useNavigate';
import {getAuthorizationToken} from '../../../shared/functions/connection/auth';

const Splash = () => {
  const {navigateTo} = useNavigate();

  const {request} = useRequest();
  const {setUser} = useUserReducer();
  useEffect(() => {
    const verifyToken = async () => {
      const token = await getAuthorizationToken();
      if (token) {
        const returnRequest = await request({
          url: URL_USER,
          method: MethodEnum.GET,
          saveGlobal: setUser,
        });

        if (returnRequest) {
          navigateTo(ROUTES.HOME);
        } else {
          navigateTo(ROUTES.LOGIN);
        }
      }
      else {
        navigateTo(ROUTES.LOGIN);
      }
    };
    verifyToken();
  }, []);

  return (
    <ContainerSplash>
      <ImageLogo
        resizeMode="contain"
        source={require('./../../../assets/images/logo.png')}></ImageLogo>
    </ContainerSplash>
  );
};

export default Splash;
