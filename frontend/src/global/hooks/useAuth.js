import { useLocation, useNavigate } from 'react-router-dom';
import DBService from '../../DBService';
import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const location = useLocation();
  const navigate = useNavigate();

  const signIn = async (data) => {
    try {
      const authResponse = await DBService.loginUser(data);

      if (authResponse.status === 200) {
        setUser(authResponse.data);
        navigate(location.state?.from || '/');
      } else {
        console.error(authResponse);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
};

export default useAuth;
