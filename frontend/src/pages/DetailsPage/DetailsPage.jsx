import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import TopCastSection from './components/TopCastSection';
import DetailsListSection from './components/DetailsListSection';
import HeroSection from './components/HeroSection';
import Recommendations from './components/Recommendations';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
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

  // console.log(detailsData);

  useEffect(() => {
    dispatch(actions.getMediaDetails(params.type, params.id));
  }, []);

  return (
    <div className="detailsPage">
      <Header
        headerItems={constants.HEADER_ITEMS}
        profileDropdownData={constants.PROFILE_DROPDOWN_DATA}
      />
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

      <Footer />
    </div>
  );
};

export default DetailsPage;
