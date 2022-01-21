import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import TopCastSection from '../../components/TopCastSection';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';

const movieDetails = {
  budget: 200000000,
  date: "2021-12-15",
  duration: 148,
  genres: [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'}
  ],
  id: 634649,
  originalTitle: "Spider-Man: No Way Home",
  overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  poster: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  productionCompanies: [
    {
      id: 420, 
      logo: "https://image.tmdb.org/t/p/original/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: 'Marvel Studios',
    },
    {
      id: 84041, 
      logo: "https://image.tmdb.org/t/p/original/nw4kyc29QRpNtFbdsBHkRSFavvt.png", 
      name: 'Pascal Pictures',
    },
    {
      id: 5, 
      logo: "https://image.tmdb.org/t/p/original/71BqEFAF4V3qjjMPCpLuyJFB9A.png", 
      name: 'Columbia Pictures',
    }
  ],
  productionCountries: ['United States of America'],
  revenue: 1631853496,
  status: "Released",
  title: "Spider-Man: No Way Home",
  voteAvg: 8.4,
};

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
    // dispatch(actions.getMediaDetails(params.type, params.id));
  }, []);

  return (
    <div className="detailsPage">
      <Header
        headerItems={constants.HEADER_ITEMS}
        profileDropdownData={constants.PROFILE_DROPDOWN_DATA}
      />
      {detailsLoading && <Loader />}
      {detailsError && <div>{constants.errorMessage}</div>}
      {detailsData && <div>Details</div>}
      <TopCastSection
        data={detailsCastList}
        btnShowMoreContent={constants.btnShowMoreContent}
      />
      <Footer />
    </div>
  );
};

export default DetailsPage;
