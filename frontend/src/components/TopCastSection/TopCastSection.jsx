import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Heading from '../Heading';
import PersonItem from '../PersonItem';
import { getFormattedCastItem } from '../../global/helpers';
import { Container, ItemsContainer } from './styles';

const TopCastSection = ({ data, btnShowMoreContent }) => {
  const onPersonClickHandler = (id) => {
    console.log(id);
  }

  const items = data?.slice(0, 10).map(item => 
    <PersonItem
      key={item.id}
      data={getFormattedCastItem(item)}
      onClickHandler={() => onPersonClickHandler(item.id)}
    />
  );

  return (
    <Container className="container">
      <Heading content="Top cast" />
      {!data && <Loader />}
      {data && (
        <ItemsContainer className="items-container">
          {items}
        </ItemsContainer>
      )}
      {data && (
        <Link 
          className='btn-full-credits-list' 
          to="/" 
          // fullCreditsList={data} 
        >
          {btnShowMoreContent}
        </Link>
      )}
    </Container>
  );
};

TopCastSection.defaultProps = {
  btnShowMoreContent: "Show More",
  data: []
};

TopCastSection.propTypes = {
  btnShowMoreContent: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

export default TopCastSection;
