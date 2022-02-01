import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';

const MediaPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const type = params.type === "movies" ? "movie" : "tv";

  const [pageNumber, setPageNumber] = useState(1);
  
  const mediaType = useSelector(selectors.mediaType);
  const genres = useSelector(selectors.genresData);
  const loading = useSelector(selectors.loading);
  const filteredData = useSelector(selectors.filteredData);
  const filteredDataError = useSelector(selectors.filteredDataError);
  const isNextPageAvailable = useSelector(selectors.isNextPageAvailable);

  useEffect(() => {
    if (mediaType !== type) {
      dispatch(actions.changeMediaType(type));
      // setPageNumber(1);
    }

    if (pageNumber === 1) {
      dispatch(actions.clearFilteredMedia());
    }

    if (genres.length === 0) {
      dispatch(actions.getGenres());
    }
    
    dispatch(actions.getFilteredMedia(type, pageNumber))
  }, [pageNumber, params]);

  // console.log(genres);
  // console.log(filteredData);
  // useEffect(() => {
  //   if (pageNumber === 1) {
  //     dispatch(actions.trendingsClearData());
  //   }
  //   dispatch(actions.getTrendingsMedia(pageNumber));
  // }, [pageNumber]);

  const paginationBtnClickHandler = () => setPageNumber(pageNumber + 1);

  return (
    <div className="moviespage">
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
