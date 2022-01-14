import React from 'react';
import { CircularProgress } from '@mui/material';
import './Loader.scss';

const Loader = () => (
  <div className='loader-container'>
    <CircularProgress />
  </div>
);

export default Loader;