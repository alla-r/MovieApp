import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MovieCard from '../MovieCard';
import Button from '../Button';
import Heading from '../Heading';
import { Container, ItemsContainer, Error } from './styles';

function ContentContainer({
  loading = false,
  data = [],
  error = null,
  paginationBtn = null,
  heading = null,
}) {
  const navigate = useNavigate();

  const items = data?.map((item) => {
    const { type, id } = item;

    return (
      <MovieCard
        key={`${type}/${id}`}
        data={item}
        onClickHandler={() => {
          navigate(`/${type}/${id}`);
        }}
      />
    );
  });

  return (
    <Container className="container">
      {heading && <Heading content={heading} />}
      {data && data.length > 0 && (
        <ItemsContainer data-testid="items-container" className="items-container">
          {items}
        </ItemsContainer>
      )}

      {loading && <Loader />}
      {error && error.status && <Error data-testid="error">{error.message}</Error>}
      {paginationBtn && paginationBtn.status && (
        <Button
          onClickHandler={paginationBtn.onClickHandler}
          btnText={paginationBtn.text}
          className="pagination-btn"
          data-testid="pagination-btn"
          btnStyles={{ color: 'secondary' }}
        />
      )}
    </Container>
  );
}

ContentContainer.propTypes = {
  heading: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      voteAvg: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      poster: PropTypes.string,
    }),
  ),
  error: PropTypes.shape({
    status: PropTypes.bool,
    message: PropTypes.string,
  }),
  paginationBtn: PropTypes.shape({
    status: PropTypes.bool,
    text: PropTypes.string,
    onClickHandler: PropTypes.func,
  }),
};

export default ContentContainer;
