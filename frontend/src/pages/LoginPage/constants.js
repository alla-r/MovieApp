import i18next from '../../utils/i18n';

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
    label: i18next.t('username'),
  },
  {
    key: 'password',
    label: i18next.t('password'),
  },
  {
    key: 'passwordConfirmation',
    label: i18next.t('confirmPassword'),
  },
];

export const LOGIN_FORM_FIELDS = [
  {
    key: 'username',
    label: i18next.t('username'),
  },
  {
    key: 'password',
    label: i18next.t('password'),
  },
];

export const TITLE_TEXT = {
  login: i18next.t('loginToAccount'),
  signUp: i18next.t('createAccount'),
};

export const BTN_TEXT = {
  login: i18next.t('login'),
  signUp: i18next.t('register'),
};

export const MESSAGE_CONFIG = {
  register: {
    success: i18next.t('userCreateSuccess'),
    error: i18next.t('userCreateError'),
  },
};

export const IF_YOU_DONT_HAVE_ACCOUNT = i18next.t('ifYouDontHaveAccount');
export const CLICK_HERE = i18next.t('clickHere');
