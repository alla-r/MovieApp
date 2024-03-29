import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Name } from './styles';

function CrewItem({ name, role, onClickHandler }) {
  return (
    <Container>
      <Name onClick={onClickHandler}>{name}</Name>
      <Title>{role}</Title>
    </Container>
  );
}

CrewItem.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default CrewItem;
