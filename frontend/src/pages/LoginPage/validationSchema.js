import * as Yup from 'yup';

const INITIAL_FORM_STATE = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string()
    .max(30, 'Name must be at most 30 characters')
    .required('This field is mandatory'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(50, 'Password must be at most 50 characters')
    .matches(/[a-z]/g, 'Password must contain at least 1 lowercase')
    .matches(/[A-Z]/g, 'Password must contain at least 1 uppercase')
    .matches(/[^a-zA-Z0-9\s]/g, 'Password must contain at least 1 symbol')
    .required('This field is mandatory'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('This field is mandatory'),
});

const LOGIN_FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required('This field is mandatory'),
  password: Yup.string().required('This field is mandatory'),
});

export { INITIAL_FORM_STATE, FORM_VALIDATION, LOGIN_FORM_VALIDATION };
