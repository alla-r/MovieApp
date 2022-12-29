export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const REGISTER_FORM_FIELDS = [
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'password',
    label: 'Password',
  },
  {
    key: 'passwordConfirmation',
    label: 'Confirm Password',
  },
];

export const LOGIN_FORM_FIELDS = [
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'password',
    label: 'Password',
  },
];
