import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ContentContainer from '../../components/ContentContainer';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import './LoginPage.scss';

const LoginPage = () => {
  const params = useParams();
  const isLogin = params.type === 'login';

  console.log(params.type);

  useEffect(() => {}, []);

  return <div className="page-wrapper">{isLogin ? <LoginForm /> : <RegisterForm />}</div>;
};

export default withLayout(LoginPage);
