import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MovieCard from '../MovieCard';
import Button from '../Button';
import { Container, ItemsContainer, Error } from './styles';

const ContentContainer = ({ loading, data, error, paginationBtn }) => {
  const formatMediaData = (item) => {
    const formattedItem = {
      id: item.id,
      date: item.release_date || item.first_air_date,
      title: item.title || item.name,
      description: item.overview,
      voteAvg: item.vote_average,
      poster: `https://image.tmdb.org/t/p/original${item.poster_path}`,
    };

    return formattedItem;
  };

  const items =
    data &&
    data.map((media) => (
      <MovieCard
        key={media.id}
        onClickHandler={() => console.log('item ' + media.id)}
        data={formatMediaData(media)}
      />
    ));

  return (
    <Container className="container">
      {data && <ItemsContainer className="items-container">{items}</ItemsContainer>}
      {loading && <Loader />}
      {error.status && <Error>{error.message}</Error>}
      {paginationBtn.status && (
        <Button
          onClickHandler={paginationBtn.onClickHandler}
          btnText={paginationBtn.text}
          className="pagination-btn"
          btnStyles={{
            color: 'secondary',
          }}
        />
      )}
    </Container>
  );
};

ContentContainer.defaultProps = {
  loading: false,
  data: [],
  error: null,
  paginationBtn: null,
};

ContentContainer.propTypes = {
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
