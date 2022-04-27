import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer';
import GenreItem from '../../components/GenreItem';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import './MediaPage.scss';

const MediaPage = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [pageNumber, setPageNumber] = useState(1);

  const genres = useSelector(selectors.genresData);
  const loading = useSelector(selectors.loading);
  const filteredData = useSelector(selectors.filteredData);
  const filteredDataError = useSelector(selectors.filteredDataError);
  const isNextPageAvailable = useSelector(selectors.isNextPageAvailable);

  useEffect(() => {
    dispatch(actions.getGenres(type));
    dispatch(actions.getFilteredMedia(type, pageNumber));

    return () => dispatch(actions.clearFilteredMedia());
  }, [type]);

  useEffect(() => {
    if (pageNumber !== 1) {
      dispatch(actions.getFilteredMedia(type, pageNumber));
    }
  }, [pageNumber]);

  const paginationBtnClickHandler = () => {
    setPageNumber(pageNumber + 1);
  };

  const onGenreClickHandler = (genreId) => {
    console.log(genreId);
    const newGenreList = genres.map((genre) => {
      const newGenreItem = {
        ...genre,
        isChosen: genreId === genre.id ? !genre.isChosen : genre.isChosen,
      };

      return newGenreItem;
    });

    const searchGenres = newGenreList
      .map(({ id, isChosen }) => (isChosen ? id : null))
      .filter((genre) => genre);

    dispatch(actions.updateGenreList(newGenreList));
    setPageNumber(1);
    dispatch(actions.getFilteredMedia(type, pageNumber, searchGenres));
  };

  const genreItems = genres.map(({ id, name, isChosen }) => (
    <GenreItem
      key={id}
      genre={name}
      isActive={isChosen}
      onClickHandler={() => onGenreClickHandler(id)}
    />
  ));

  return (
    <div className="movies-page">
      <div className="filters-section-bg">
        <div className="filters-section container">
          <div className="genre-list">{genreItems}</div>
        </div>
      </div>

      <ContentContainer
        data={filteredData}
        loading={loading}
        error={{
          status: !!filteredDataError,
          message: constants.errorMessage,
        }}
        paginationBtn={{
          text: constants.paginationBtnText,
          status: isNextPageAvailable,
          onClickHandler: paginationBtnClickHandler,
        }}
      />
    </div>
  );
};

export default withLayout(MediaPage);
