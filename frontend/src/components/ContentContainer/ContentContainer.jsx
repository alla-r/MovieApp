import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MovieCard from '../MovieCard';
import Button from '../Button';
import { Container, ItemsContainer, Error } from './styles';
import { getFormattedItem } from '../../global/helpers';

const ContentContainer = ({ loading, data, error, paginationBtn }) => {
  const navigate = useNavigate();

  const items =
    data &&
    data.map((item) => {
      const formattedItem = getFormattedItem(item);
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
