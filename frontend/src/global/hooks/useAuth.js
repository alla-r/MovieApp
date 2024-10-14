import { useLocation, useNavigate } from 'react-router-dom';
import DBService from '../../DBService';
import useLocalStorage from './useLocalStorage';
import { showNotification } from '../helpers';
import * as initConstants from '../../pages/InitComponent/constants';

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const location = useLocation();
  const navigate = useNavigate();

  const signIn = async (data) => {
    try {
      const authResponse = await DBService.loginUser(data);

      if (authResponse.status === 200) {
        setUser(authResponse.data);
        navigate(location.state?.from || '/', { replace: true });
      } else {
        const errorMessage =
          authResponse.response && authResponse.response.data && authResponse.response.data.error;
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.error,
          errorMessage || authResponse.message,
        );
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.error;
      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.error,
        errorMessage || error.message,
      );
    }
  };

  const signOut = () => {
    setUser(null);
    navigate('/');
  };

  return { user, signIn, signOut };
};

export default useAuth;
