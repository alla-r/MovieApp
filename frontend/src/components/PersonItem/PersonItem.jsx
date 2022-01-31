import React from 'react';
import PropTypes from 'prop-types';
import { PersonContainer, ImageWrapper, ContentWrapper, Name, Character } from './styles';

const PersonItem = ({ data, onClickHandler }) => {
  const { name, character, poster } = data;

  return (
    <PersonContainer onClick={onClickHandler}>
      <ImageWrapper imgSrc={poster} />
      <ContentWrapper>
        <Name>{name}</Name>
        <Character>{`as ${character}`}</Character>
      </ContentWrapper>
    </PersonContainer>
  );
};

PersonItem.defaultProps = {
  onClickHandler: () => {},
};

PersonItem.propTypes = {
  onClickHandler: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonItem;
