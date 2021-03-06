import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import TopCastSection from './components/TopCastSection';
import DetailsListSection from './components/DetailsListSection';
import HeroSection from './components/HeroSection';
import Recommendations from './components/Recommendations';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import './DetailsPage.scss';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const detailsLoading = useSelector(selectors.detailsLoading);
  const detailsData = useSelector(selectors.detailsData);
  const detailsCastList = useSelector(selectors.detailsCastList);
  const detailsCrewList = useSelector(selectors.detailsCrewList);
  const detailsRecommendationsList = useSelector(selectors.detailsRecommendationsList);
  const detailsError = useSelector(selectors.detailsError);

  // console.log(detailsLoading);

  useEffect(() => {
    dispatch(actions.getMediaDetails(params.type, params.id));

    return dispatch(actions.mediaDetailsClearData());
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
