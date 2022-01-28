import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, TextFieldWrapper } from './styles';

const SearchField = ({ submitHandler }) => {
  const [value, setValue] = useState(null);

  const onSubmitHandler = (event) => {
    console.log(event)
    event.preventDefault();
    submitHandler(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextFieldWrapper onSubmit={(e) => onSubmitHandler(e)}>
      <TextField
        type="text"
        placeholder="Search for a movie, tv show, person ..."
        name="search"
        onChange={handleChange}
      />
      <IconButton type="submit" />
    </TextFieldWrapper>
  );
};

SearchField.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default SearchField;
