import { useEffect, createRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  INITIAL_FORM_STATE,
  REGISTER_FORM_VALIDATION,
  LOGIN_FORM_VALIDATION,
} from './validationSchema';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import Fields from './components/Fields';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import withLayout from '../../global/hoc/Layout';
import './LoginPage.scss';
import { useAuthContext } from '../../global/hoc/AuthContextProvider';

const LoginPage = () => {
  const params = useParams();
  const isLogin = params.type === 'login';
  const flow = isLogin ? 'login' : 'signUp';

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikRef = createRef();

  const auth = useAuthContext();

  const loading = useSelector(selectors.loading);
  const isLoggedIn = useSelector(selectors.success);
  const error = useSelector(selectors.error);

  useEffect(() => {
    formikRef.current?.resetForm();
  }, [flow]);

  const submitHandler = ({ username, password }, { resetForm }) => {
    const flowCallbacks = {
      signUp: actions.registerUser,
      login: auth.signIn,
    };

    dispatch(flowCallbacks[flow]({ username, password })).then(() => navigate('/auth/login'));
    resetForm();
  };

  const titleText = {
    login: 'Login to your account',
    signUp: 'Create an account',
  };

  const btnText = {
    login: 'Login',
    signUp: 'Sign Up',
  };

  const navigateToRegister = () => navigate('/auth/signup');

  return (
    <div className="page-wrapper">
      <div className="form-wrapper">
        <Formik
          innerRef={formikRef}
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={flow === 'login' ? LOGIN_FORM_VALIDATION : REGISTER_FORM_VALIDATION}
          onSubmit={submitHandler}
        >
          <Form>
            <div className="form-header">{titleText[flow]}</div>
            {/* {loading && <Loader />} */}
            {/* {error && <p>Something went wrong</p>} */}
            {flow === 'signUp' && <Fields config={constants.REGISTER_FORM_FIELDS} />}
            {flow === 'login' && (
              <>
                <Fields config={constants.LOGIN_FORM_FIELDS} />
                <div>
                  If you do not have an account
                  <span
                    role="button"
                    tabIndex="0"
                    onClick={navigateToRegister}
                    onKeyDown={navigateToRegister}
                  >
                    click here
                  </span>
                  .
                </div>
              </>
            )}
            <Button
              className="button"
              btnText={btnText[flow]}
              btnType="primary"
              onClickHandler={() => {}}
              type="submit"
              btnStyles={{
                isFilled: true,
                color: 'secondary',
              }}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default withLayout(LoginPage);
