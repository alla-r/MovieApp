import React from 'react';
import PropTypes from 'prop-types';
import { GenreItemWrapper } from './styles';

const GenreItem = ({ onClickHandler, genre }) => (
  <GenreItemWrapper onClick={onClickHandler}>{genre}</GenreItemWrapper>
);

GenreItem.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default GenreItem;
