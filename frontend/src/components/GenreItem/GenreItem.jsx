import React from 'react';
import PropTypes from 'prop-types';
import { GenreItemWrapper } from './styles';

function GenreItem({ onClickHandler, genre, isActive }) {
  return (
    <GenreItemWrapper onClick={onClickHandler} className={isActive ? 'active' : ''}>
      {genre}
    </GenreItemWrapper>
  );
}

GenreItem.defaultProps = { isActive: false };

GenreItem.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default GenreItem;
