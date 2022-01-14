import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieCard from '../../components/MovieCard';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';
import './HomePage.scss';

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(3);
  const dispatch = useDispatch();
  const store = useStore();
  const trendingsLoading = useSelector(selectors.trendingsLoading);
  const trendingsData = useSelector(selectors.trendingsData);
  const trendingsError = useSelector(selectors.trendingsError);
  const isNextPageAvailable = useSelector(selectors.trendingsIsNextPageAvailable);

  console.log(store.getState(), trendingsError, isNextPageAvailable);

  useEffect(() => {
    dispatch(actions.getTrendingsMedia(pageNumber));
  }, []);

  const formatMovieData = (item) => {
    const formattedItem = {
      id: item.id,
      date: item.release_date || item.first_air_date,
      title: item.title || item.name,
      description: item.overview,
      voteAvg: item.vote_average,
      poster: `https://image.tmdb.org/t/p/original${item.poster_path}`,
    };

    return formattedItem;
  };

  const cards = trendingsData?.map((movie) => (
    <MovieCard
      key={movie.id}
      onClickHandler={() => console.log('card ' + movie.id)}
      data={formatMovieData(movie)}
    />
  ));

  return (
    <div className="homepage">
      <Header
        headerItems={constants.HEADER_ITEMS}
        profileDropdownData={constants.PROFILE_DROPDOWN_DATA}
      />
      <div className="container">
        {trendingsLoading && <Loader />}
        {trendingsData && <div className="card-container">{cards}</div>}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
