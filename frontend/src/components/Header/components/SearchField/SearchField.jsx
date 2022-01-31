/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, TextFieldWrapper, TextFieldMobile, CloseButton } from './styles';

const SearchField = ({ submitHandler, isMobileMode, closeBtnClickHandler }) => {
  const [value, setValue] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submitHandler(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputProps = {
    value,
    type: "text",
    placeholder: "Search for a movie, tv show, person ...",
    name: "search",
    onChange: handleChange
  }

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
};

SearchField.defaultProps = {
  isMobileMode: false,
  closeBtnClickHandler: () => {}
};

SearchField.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isMobileMode: PropTypes.bool,
  closeBtnClickHandler: PropTypes.func
};

export default SearchField;
