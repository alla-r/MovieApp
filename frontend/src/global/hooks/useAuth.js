import { useRef, useCallback } from 'react';
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
  const logoutTimerRef = useRef(null);

  const logout = useCallback(
    (isByUser = false) => {
      setUser(null);
      localStorage.removeItem('expiration');
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }

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

  const startLogoutTimer = useCallback(() => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }

    logoutTimerRef.current = setTimeout(logout, 1000 * 60 * 60);
  }, [logout]);

  const signIn = async (data) => {
    try {
      const authResponse = await DBService.loginUser(data);

      if (authResponse.status === 200) {
        setUser(authResponse.data);

        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('expiration', expiration.toISOString());

        navigate(location.state?.from || '/', { replace: true });
        startLogoutTimer();
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

  return { user, signIn, logout, logoutTimerRef };
};

export default useAuth;
