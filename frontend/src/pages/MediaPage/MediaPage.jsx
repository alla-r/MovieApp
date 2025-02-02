import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContentContainer from '../../components/ContentContainer';
import GenreItem from '../../components/GenreItem';
import * as constants from './constants';
import { selectors, actions } from './slice';
import withLayout from '../../utils/hoc/Layout';
import './MediaPage.scss';

function MediaPage() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();

  const selectedGenres = searchParams.get('genre') || '';
  let selectedGenresArr = selectedGenres ? selectedGenres.split(',') : [];

  const genres = useSelector(selectors.genresData);
  const loading = useSelector(selectors.loading);
  const filteredData = useSelector(selectors.filteredData);
  const filteredDataError = useSelector(selectors.filteredDataError);
  const isNextPageAvailable = useSelector(selectors.isNextPageAvailable);

  useEffect(() => {
    dispatch(actions.getGenres({ type, selectedGenresArr }));
    dispatch(actions.getFilteredMedia({ type, pageNumber, selectedGenresArr }));

    return () => dispatch(actions.clearFilteredMedia());
  }, [type, i18n.language]);

  useEffect(() => {
    if (pageNumber !== 1) {
      dispatch(actions.getFilteredMedia({ type, pageNumber, selectedGenresArr }));
    }
  }, [pageNumber, i18n.language]);

  const paginationBtnClickHandler = () => {
    setPageNumber(pageNumber + 1);
  };

  const onGenreClickHandler = (genreId) => {
    if (selectedGenresArr.includes(genreId.toString())) {
      selectedGenresArr = selectedGenresArr.filter((id) => id !== genreId.toString());
    } else {
      selectedGenresArr.push(genreId.toString());
    }

    setSearchParams({ genre: selectedGenresArr.join(',') });

    const newGenreList = genres.map((genre) => ({
      ...genre,
      isChosen: selectedGenresArr.includes(genre.id.toString()),
    }));

    dispatch(actions.updateGenreList(newGenreList));
    setPageNumber(1);
    dispatch(actions.getFilteredMedia({ type, pageNumber, selectedGenresArr }));
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
          message: filteredDataError,
        }}
        paginationBtn={{
          text: constants.paginationBtnText,
          status: isNextPageAvailable,
          onClickHandler: paginationBtnClickHandler,
        }}
      />
    </div>
  );
}

export default withLayout(MediaPage);
