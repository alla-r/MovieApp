import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import CrewItem from './components/CrewItem';

const LinksBlock = ({ crewList }) => {
  const items = crewList.map(({ id, job, name }) => (
    <CrewItem key={id} role={job} name={name} onClickHandler={() => console.log(id)} />
  ));

  return <Container>{items}</Container>;
};

LinksBlock.propTypes = {
  crewList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinksBlock;
