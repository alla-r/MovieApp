import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import './TextField.scss';

const TextFieldWrapper = ({ name, label, type, InputProps, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    id: name,
    fullWidth: true,
    // variant: 'outlined',
    label,
    type,
    InputProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <div className="text-field-wrapper">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <TextField {...configTextfield} />
    </div>
  );
};

TextFieldWrapper.defaultProps = {
  type: 'text',
  InputProps: null,
};

TextFieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  InputProps: PropTypes.shape({
    endAdornment: PropTypes.element,
  }),
};

export default TextFieldWrapper;
