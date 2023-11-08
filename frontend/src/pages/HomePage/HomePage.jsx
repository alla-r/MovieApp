import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../../components/ContentContainer';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';

function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  const trendingsLoading = useSelector(selectors.trendingsLoading);
  const trendingsData = useSelector(selectors.trendingsData);
  const trendingsError = useSelector(selectors.trendingsError);
  const isNextPageAvailable = useSelector(selectors.trendingsIsNextPageAvailable);

  useEffect(() => {
    if (pageNumber === 1) {
      dispatch(actions.trendingsClearData());
    }
    dispatch(actions.getTrendingsMedia(pageNumber));
  }, [pageNumber]);

  const paginationBtnClickHandler = () => setPageNumber(pageNumber + 1);

  return (
    <div className="homepage">
      <ContentContainer
        heading={constants.trendingsHeading}
        data={trendingsData}
        loading={trendingsLoading}
        error={{
          status: !!trendingsError,
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
}

export default withLayout(HomePage);
