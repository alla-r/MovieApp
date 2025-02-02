import React, { useEffect, createRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  INITIAL_FORM_STATE,
  REGISTER_FORM_VALIDATION,
  LOGIN_FORM_VALIDATION,
} from './validationSchema';
import * as constants from './constants';
import { selectors, actions } from './slice';
import Fields from './components/Fields';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import withLayout from '../../utils/hoc/Layout';
import './LoginPage.scss';
import { useAuthContext } from '../../utils/hoc/AuthContextProvider';

function LoginPage() {
  const params = useParams();
  const isLogin = params.type === 'login';
  const flow = isLogin ? 'login' : 'signUp';

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikRef = createRef();

  const auth = useAuthContext();

  const loading = useSelector(selectors.loading);
  // const isSuccess = useSelector(selectors.success);
  // const error = useSelector(selectors.error);

  useEffect(() => {
    formikRef.current?.resetForm();
  }, [flow]);

  const submitHandler = ({ username, password }) => {
    const flowCallbacks = {
      signUp: actions.registerUser,
      login: auth.signIn,
    };

    const data = {
      username,
      password,
    };

    if (flow === 'login') {
      auth.signIn(data, navigate);
    } else {
      dispatch(flowCallbacks[flow]({ data, navigate }));
    }
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
            <div className="form-header">{constants.TITLE_TEXT[flow]}</div>
            {loading && <Loader />}
            {flow === 'signUp' && <Fields config={constants.REGISTER_FORM_FIELDS} />}
            {flow === 'login' && (
              <>
                <Fields config={constants.LOGIN_FORM_FIELDS} />
                <div>
                  {constants.IF_YOU_DONT_HAVE_ACCOUNT}
                  <span
                    role="button"
                    tabIndex="0"
                    onClick={navigateToRegister}
                    onKeyDown={navigateToRegister}
                  >
                    {constants.CLICK_HERE}
                  </span>
                  .
                </div>
              </>
            )}
            <Button
              className="button"
              btnText={constants.BTN_TEXT[flow]}
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
}

export default withLayout(LoginPage);
