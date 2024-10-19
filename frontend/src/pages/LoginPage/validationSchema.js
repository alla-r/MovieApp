import * as Yup from 'yup';
import i18next from '../../utils/i18n';

const INITIAL_FORM_STATE = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const REGISTER_FORM_VALIDATION = Yup.object().shape({
  username: Yup.string()
    .max(30, i18next.t('validationErrorName'))
    .required(i18next.t('mandatoryField')),
  password: Yup.string()
    .min(6, i18next.t('validationErrorMinChar'))
    .matches(/[a-z]/g, i18next.t('validationErrorLowercase'))
    .matches(/[A-Z]/g, i18next.t('validationErrorUppercase'))
    .matches(/[^a-zA-Z0-9\s]/g, i18next.t('validationErrorSymbol'))
    .required(i18next.t('mandatoryField')),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], i18next.t('passwordMatch'))
    .required(i18next.t('mandatoryField')),
});

const LOGIN_FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required(i18next.t('mandatoryField')),
  password: Yup.string().required(i18next.t('mandatoryField')),
});

export { INITIAL_FORM_STATE, REGISTER_FORM_VALIDATION, LOGIN_FORM_VALIDATION };
