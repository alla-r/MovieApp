import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MovieCard from '../MovieCard';
import Button from '../Button';
import { Container, ItemsContainer, Error } from './styles';

const ContentContainer = ({ loading, data, error, paginationBtn }) => {
  const navigate = useNavigate();

  const formatMediaData = (item) => {
    const formattedItem = {
      id: item.id,
      type: item.media_type,
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
    data.map((item) => {
      const formattedItem = formatMediaData(item);
      const { type, id } = formattedItem;

      return (
        <MovieCard
          key={id}
          data={formattedItem}
          onClickHandler={() => {
            navigate(`${type}/${id}`);
          }}
        />
      );
    });

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
