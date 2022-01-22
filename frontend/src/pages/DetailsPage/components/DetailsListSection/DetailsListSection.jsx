import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../components/Loader';
import Heading from '../../../../components/Heading';
import { Container, ItemsContainer, ItemWrapper, ItemTitle, ItemValue } from './styles';

const DetailsListSection = ({ mappingConfig, data }) => {
  const items = mappingConfig.map(({ title, value }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ItemWrapper key={index} >
      <ItemTitle>{title}</ItemTitle>
      <ItemValue>{data[value]}</ItemValue>
    </ItemWrapper>
  ));

  return (
    <Container className="container">
      <Heading content="Details" />
      {!data && <Loader />}
      {data && (
        <ItemsContainer className="items-container">
          {items}
          
        </ItemsContainer>
      )}
    </Container>
  );
};

DetailsListSection.defaultProps = {
};

DetailsListSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  mappingConfig: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired
};

export default DetailsListSection;
