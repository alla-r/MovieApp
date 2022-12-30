/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import TopCastSection from './components/TopCastSection';
import DetailsListSection from './components/DetailsListSection';
import HeroSection from './components/HeroSection';
import Recommendations from './components/Recommendations';
import * as actions from './actions';
import * as initActions from '../InitComponent/actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import './DetailsPage.scss';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const detailsLoading = useSelector(selectors.detailsLoading);
  const detailsData = useSelector(selectors.detailsData);
  const detailsCastList = useSelector(selectors.detailsCastList);
  const detailsCrewList = useSelector(selectors.detailsCrewList);
  const detailsRecommendationsList = useSelector(selectors.detailsRecommendationsList);
  const detailsError = useSelector(selectors.detailsError);
  const mediaCustomDetails = useSelector(selectors.mediaCustomDetails);

  const favoriteCallback = () =>
    dispatch(
      actions.changeMediaCustomDetails({
        listName: 'favorites',
        mediaInfo: {
          id: params.id,
          type: params.type,
          details: detailsData,
        },
        action: mediaCustomDetails?.isInFavorites ? 'remove' : 'add',
      }),
    );
  const watchlistCallback = () =>
    dispatch(
      actions.changeMediaCustomDetails({
        listName: 'watchlist',
        mediaInfo: {
          id: params.id,
          type: params.type,
          details: detailsData,
        },
        action: mediaCustomDetails?.isInWatchlist ? 'remove' : 'add',
      }),
    );

  const setRateCallback = (rate) => {
    dispatch(
      actions.changeMediaCustomDetails({
        listName: 'rate',
        mediaInfo: {
          id: params.id,
          type: params.type,
          details: detailsData,
          rate,
        },
        action: rate ? 'add' : 'remove',
      }),
    );
  };

  const rateCallback = (currentValue = null) => {
    dispatch(
      initActions.showModal({
        type: 'rate',
        data: {
          handleCloseCallBack: () => dispatch(initActions.hideModal()),
          setRateCallback,
          currentValue,
        },
      }),
    );
  };

  const onPersonClickCallback = (id) => navigate(`/person/${id}`);

  constants.CIRCULAR_BUTTONS_CONFIG.forEach((btnConfig) => {
    if (btnConfig.id === 'favorite') {
      btnConfig.onClickHandler = favoriteCallback;
      btnConfig.isActive = mediaCustomDetails?.isInFavorites;
    }
    if (btnConfig.id === 'watchlist') {
      btnConfig.onClickHandler = watchlistCallback;
      btnConfig.isActive = mediaCustomDetails?.isInWatchlist;
    }
    if (btnConfig.id === 'rate') {
      btnConfig.onClickHandler = rateCallback.bind(this, mediaCustomDetails?.rateMark);
      btnConfig.isActive = mediaCustomDetails?.isInRatingList;
    }
  });

  useEffect(() => {
    dispatch(actions.getMediaDetails(params.type, params.id));
    dispatch(actions.getMediaCustomDetails({ id: params.id, type: params.type }));

    return () => dispatch(actions.mediaDetailsClearData());
  }, [params]);

  return (
    <div className="detailsPage">
      {detailsLoading && <Loader />}
      {detailsError && <div>{constants.errorMessage}</div>}

      {detailsData && (
        <>
          <HeroSection data={detailsData} crew={detailsCrewList} />
          <div className="cast-and-details-container container">
            <TopCastSection
              data={detailsCastList}
              btnShowMoreContent={constants.btnShowMoreContent}
              onPersonClickCallback={onPersonClickCallback}
            />
            <DetailsListSection
              data={detailsData}
              mappingConfig={
                detailsData.type === 'movie'
                  ? constants.DETAILS_MOVIE_LIST_MAPPING
                  : constants.DETAILS_TV_LIST_MAPPING
              }
            />
          </div>
          <Recommendations data={detailsRecommendationsList} />
        </>
      )}
    </div>
  );
};

export default withLayout(DetailsPage);
