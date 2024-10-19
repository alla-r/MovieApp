/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { IconButton, TextField, TextFieldWrapper, TextFieldMobile, CloseButton } from './styles';

function SearchField({ submitHandler, isMobileMode = false, closeBtnClickHandler = () => {} }) {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submitHandler(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputProps = {
    value,
    type: 'text',
    placeholder: t('searchPlaceholder'),
    name: 'search',
    onChange: handleChange,
  };

  return (
    <TextFieldWrapper onSubmit={(e) => onSubmitHandler(e)}>
      {!isMobileMode ? (
        <>
          <TextField {...inputProps} />
          <IconButton type="submit" />
        </>
      ) : (
        <>
          <TextFieldMobile autoFocus {...inputProps} />
          <CloseButton onClick={closeBtnClickHandler} type="button" />
        </>
      )}
    </TextFieldWrapper>
  );
}

SearchField.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isMobileMode: PropTypes.bool,
  closeBtnClickHandler: PropTypes.func,
};

export default SearchField;
