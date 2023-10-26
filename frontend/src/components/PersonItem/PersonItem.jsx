import React from 'react';
import PropTypes from 'prop-types';
import { PersonContainer, ImageWrapper, ContentWrapper, Name, Character } from './styles';

const PersonItem = ({ data, onClickHandler, size }) => {
  const { name, character, department, poster } = data;

  return (
    <PersonContainer onClick={onClickHandler} className="person--container">
      <ImageWrapper imgSrc={poster} size={size} />
      <ContentWrapper>
        <Name>{name}</Name>
        {character && <Character>{`as ${character}`}</Character>}
        {department && <Character>{department}</Character>}
      </ContentWrapper>
    </PersonContainer>
  );
};

PersonItem.defaultProps = {
  onClickHandler: () => {},
  size: 'big',
};

PersonItem.propTypes = {
  size: PropTypes.string,
  onClickHandler: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    department: PropTypes.string,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonItem;
