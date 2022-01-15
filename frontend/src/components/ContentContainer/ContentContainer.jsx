import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MovieCard from '../MovieCard';
import { Container, ItemsContainer, Error } from './styles';

const ContentContainer = ({ loading, data, error }) => {
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
      {loading && <Loader />}
      {data && <ItemsContainer className="items-container">{items}</ItemsContainer>}
      {error.status && <Error>{error.message}</Error>}
    </Container>
  );
};

ContentContainer.defaultProps = {};

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
};

export default ContentContainer;
