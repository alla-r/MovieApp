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
  const { type } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  
  const storedMediaType = useSelector(selectors.mediaType);
  const genres = useSelector(selectors.genresData);
  const loading = useSelector(selectors.loading);
  const filteredData = useSelector(selectors.filteredData);
  const filteredDataError = useSelector(selectors.filteredDataError);
  const isNextPageAvailable = useSelector(selectors.isNextPageAvailable);

  useEffect(() =>  {
    dispatch(actions.changeMediaType(type));
    dispatch(actions.getGenres());
  }, [])

  useEffect(() => {
    if (storedMediaType && storedMediaType !== type) {
      setPageNumber(1)
      dispatch(actions.clearFilteredMedia());
      dispatch(actions.changeMediaType(type));
    }
    
    dispatch(actions.getFilteredMedia(type, pageNumber))
  }, [pageNumber, type]);

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
