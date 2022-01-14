import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import axios from 'axios'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieCard from '../../components/MovieCard';
import * as actions from './actions';
import * as constants from './constants';
import './HomePage.scss';

const HomePage = () => {
  const [moviesData, setMovieData] = useState([]);
  const dispatch = useDispatch();
  const store = useStore();
  console.log(store.getState());

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    dispatch(actions.getTrendingsRequest(1));
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setMovieData(response.data.results);
      })

      console.log(store.getState());
    
  }, []);

  const formatMovieData = (item) => {
    const formattedItem = {
      id: item.id,
      date: item.release_date || item.first_air_date,
      title: item.title || item.name,
      description: item.overview,
      voteAvg: item.vote_average,
      poster: `https://image.tmdb.org/t/p/original${item.poster_path}`
    };

    return formattedItem;
  }

  const cards = moviesData.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        onClickHandler={() => console.log('card ' + movie.id)}
        data={formatMovieData(movie)}
      />
    )
  });

  return (
    <div className='homepage'>
      <Header headerItems={constants.HEADER_ITEMS} profileDropdownData={constants.PROFILE_DROPDOWN_DATA} />
      <div className="container">
        <div className="card-container">
          {cards}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;