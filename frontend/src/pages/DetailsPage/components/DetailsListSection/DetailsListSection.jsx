import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Loader from '../../../../components/Loader';
import Heading from '../../../../components/Heading';
import { Container, ItemsContainer, ItemWrapper, ItemTitle, ItemValue } from './styles';

const DetailsListSection = ({ mappingConfig, data }) => {
  const items = mappingConfig.map(({ title, value, type }, index) => {
    let itemValues;

    if (type === "array") {
      // eslint-disable-next-line react/no-array-index-key
      itemValues = data[value]?.map((item, i) => <ItemValue key={i}>{item}</ItemValue>);
    }

    if (type === "text") {
      itemValues = <ItemValue>{data[value]}</ItemValue>;
    }

    if (type === "money") {
      itemValues = (
        <ItemValue>
          <NumberFormat 
            value={data[value]} 
            displayType='text'
            thousandSeparator
            prefix='$ '
          />
        </ItemValue>
      );
    }

    return (
      // eslint-disable-next-line react/no-array-index-key
      <ItemWrapper key={index} >
        <ItemTitle>{title}</ItemTitle>
        {itemValues}
      </ItemWrapper>
    )
});

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

DetailsListSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  mappingConfig: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired
};

export default DetailsListSection;
