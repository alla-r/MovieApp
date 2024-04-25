import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../../components/Heading';
import PersonItem from '../../../../components/PersonItem';
import { Container, ItemsContainer } from './styles';

function TopCastSection({ data, onPersonClickCallback }) {
  const items = data
    .slice(0, 10)
    .map((item) => (
      <PersonItem key={item.id} data={item} onClickHandler={() => onPersonClickCallback(item.id)} />
    ));

  return (
    <Container>
      <Heading content="Top cast" />
      <ItemsContainer className="items-container">{items}</ItemsContainer>
    </Container>
  );
}

TopCastSection.defaultProps = { onPersonClickCallback: () => {} };

TopCastSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  onPersonClickCallback: PropTypes.func,
};

export default TopCastSection;
