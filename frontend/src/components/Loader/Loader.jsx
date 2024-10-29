import React from 'react';
import { CircularProgress } from '@mui/material';
import './Loader.scss';

function Loader() {
  return (
    <div data-testid="loader" className="loader-container">
      <CircularProgress />
    </div>
  );
}

export default Loader;
