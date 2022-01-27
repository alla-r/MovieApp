const getFormattedCreditsItem = (item) => {
  const formattedItem = {
    id: item.id,
    job: item.job || '',
    department: item.department || item.known_for_department,
    name: item.name,
    character: item.character,
    poster: `https://image.tmdb.org/t/p/original${item.profile_path}`,
  };

  return formattedItem;
};

const getFormattedRecommendationItem = (item) => {
  const formattedItem = {
    id: item.id,
    type: item.media_type,
    title: item.title || item.name,
    overview: item.overview,
    voteAvg: item.vote_average,
    date: item.release_date || item.first_air_date,
    poster: `https://image.tmdb.org/t/p/original${item.profile_path}`,
    backdrop: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
  };

  return formattedItem;
};

const getFormattedMediaDetails = (type, data) => {
  const formattedData = {};
  // console.log(type);
  // console.log(data);

  if (type === 'movie') {
    formattedData.details = {
      type,
      id: data.id,
      title: data.title,
      originalTitle: data.original_title,
      genres: data.genres,
      overview: data.overview,
      voteAvg: data.vote_average,
      status: data.status,
      poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      productionCompanies: data.production_companies.map((item) => item.name),
      productionCountries: data.production_countries.map((item) => item.name),
      duration: data.runtime,
      revenue: data.revenue,
      budget: data.budget,
      date: data.release_date,
    };
    formattedData.cast = data.credits.cast.map((item) => getFormattedCreditsItem(item));
    formattedData.crew = data.credits.crew.map((item) => getFormattedCreditsItem(item));
    formattedData.recommendations = data.recommendations.results.map((item) =>
      getFormattedRecommendationItem(item),
    );
  }

  if (type === 'tv') {
    formattedData.details = {
      type,
      id: data.id,
      title: data.name,
      originalTitle: data.original_name,
      genres: data.genres,
      overview: data.overview,
      voteAvg: data.vote_average,
      status: data.status,
      poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      productionCompanies: data.production_companies.map((item) => item.name),
      productionCountries: data.production_countries.map((item) => item.name),
      createdBy: data.created_by.map((creator) => ({
        id: creator.id,
        name: creator.name,
        job: 'Created By',
      })),
      numberOfSeasons: data.number_of_seasons,
      duration: data.episode_run_time[0],
      firstAirDate: data.first_air_date,
      lastAirDate: data.last_air_date,
    };
    formattedData.cast = data.credits.cast.map((item) => getFormattedCreditsItem(item));
    formattedData.crew = data.credits.crew.map((item) => getFormattedCreditsItem(item));
    formattedData.recommendations = data.recommendations.results.map((item) =>
      getFormattedRecommendationItem(item),
    );
  }

  return formattedData;
};

export default getFormattedMediaDetails;
