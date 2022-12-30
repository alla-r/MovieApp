import React from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextField from '../../../../components/TextField';

const Fields = ({ config }) => {
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

  const fields = config.map(({ key, label }) => (
    <TextField
      key={key}
      name={key}
      label={label}
      autoComplete="off"
      type={key.includes('password') && !isPasswordVisible ? 'password' : 'text'}
      InputProps={key === 'password' ? passwordInputProps : null}
    />
  ));

  return fields;
};

export default Fields;
