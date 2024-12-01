import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ContentContainer from '../../components/ContentContainer';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../utils/hoc/Layout';
import i18next from '../../utils/i18n';

function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { i18n } = useTranslation();

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
  }, [pageNumber, i18n.language]);

  const paginationBtnClickHandler = () => setPageNumber(pageNumber + 1);

  return (
    <div className="homepage">
      <ContentContainer
        heading={i18next.t('popular')}
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
