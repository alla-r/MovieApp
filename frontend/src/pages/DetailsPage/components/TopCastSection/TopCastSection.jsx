import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../../../../components/Loader';
import Heading from '../../../../components/Heading';
import PersonItem from '../../../../components/PersonItem';
import { Container, ItemsContainer } from './styles';

const TopCastSection = ({ data, btnShowMoreContent }) => {
  const onPersonClickHandler = (id) => {
    console.log(id);
  };

  const items = data
    ?.slice(0, 10)
    .map((item) => (
      <PersonItem key={item.id} data={item} onClickHandler={() => onPersonClickHandler(item.id)} />
    ));

  return (
    <Container>
      <Heading content="Top cast" />
      {data.length === 0 && <Loader />}
      {data.length > 0 && <ItemsContainer className="items-container">{items}</ItemsContainer>}
      {data.length > 0 && (
        <Link
          className="btn-full-credits-list"
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
  btnShowMoreContent: 'Show More',
};

TopCastSection.propTypes = {
  btnShowMoreContent: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default TopCastSection;
