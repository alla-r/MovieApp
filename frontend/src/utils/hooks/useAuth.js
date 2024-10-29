import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DBService from '../../DBService';
import useLocalStorage from './useLocalStorage';
import { showNotification } from '../helpers';
import * as initConstants from '../../pages/InitComponent/constants';
import i18next from '../../utils/i18n';

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const location = useLocation();
  const navigate = useNavigate();

  const logout = useCallback(
    (isByUser = false) => {
      setUser(null);

      if (isByUser) {
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.success,
          i18next.t('logoutSuccess'),
        );
      } else {
        navigate('/auth/login');

        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.error,
          i18next.t('sessionExpired'),
        );
      }
    },
    [navigate],
  );

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

  return { user, signIn, logout };
};

export default useAuth;
