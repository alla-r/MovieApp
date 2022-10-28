import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { INITIAL_FORM_STATE, LOGIN_FORM_VALIDATION } from '../../validationSchema';
import * as actions from '../../actions';
import { loginFormFields } from '../../constants';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';

import './LoginForm.scss';

const LoginForm = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = ({ username, password }) => {
    const data = {
      username,
      password,
    };

    console.log(data);

    // dispatch(actions.registerUserRequest(data));
  };

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const passwordInputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          className="icon-btn"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          edge="end"
        >
          {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  };

  const fields = loginFormFields.map(({ key, label }) => (
    <TextField
      key={key}
      name={key}
      label={label}
      autoComplete="off"
      type={key.includes('password') && !isPasswordVisible ? 'password' : 'text'}
      InputProps={key === 'password' ? passwordInputProps : null}
    />
  ));

  const navigateToRegister = () => navigate("/auth/signup");

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={LOGIN_FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="form-header">Login to your account</div>
          {fields}
          <div>
            If you do not have an account 
            <span 
              // role="button"
              // tabIndex="-1"
              onClick={navigateToRegister}
              // onKeyDown={navigateToRegister}
            >click here</span>.
          </div>

          <Button
            className="button"
            btnText="Login"
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
  );
};

export default LoginForm;
