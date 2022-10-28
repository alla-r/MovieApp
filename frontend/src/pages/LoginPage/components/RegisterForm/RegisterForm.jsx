import React from 'react';
import { useDispatch } from 'react-redux';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../../validationSchema';
import * as actions from '../../actions';
import { formFields } from '../../constants';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';

import './RegisterForm.scss';

const RegisterForm = () => {
  // const dispatch = useDispatch();

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

  const fields = formFields.map(({ key, label }) => (
    <TextField
      key={key}
      name={key}
      label={label}
      autoComplete="off"
      type={key.includes('password') && !isPasswordVisible ? 'password' : 'text'}
      InputProps={key === 'password' ? passwordInputProps : null}
    />
  ));

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="form-header">Create an account</div>
          {fields}
          <Button
            className="button"
            btnText="Sign Up"
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

export default RegisterForm;
