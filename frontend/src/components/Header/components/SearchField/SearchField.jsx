import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, TextFieldWrapper } from './styles';

const SearchField = ({ onSearchIconClickHandler }) => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextFieldWrapper>
      <TextField
        type="text"
        placeholder="Search for a movie, tv show, person ..."
        name="search"
        onChange={handleChange}
      />
      <IconButton onClick={() => onSearchIconClickHandler(value)} />
    </TextFieldWrapper>
  );
};

SearchField.propTypes = {
  onSearchIconClickHandler: PropTypes.func.isRequired,
};

export default SearchField;
