const getFormattedCreditsItem = (item) => {
  const formattedItem = {
    id: item.id,
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
    title: item.title,
    overview: item.overview,
    voteAvg: item.vote_average,
    date: item.release_date,
    poster: `https://image.tmdb.org/t/p/original${item.profile_path}`,
    backdrop: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
  };

  return formattedItem;
}

const getFormattedMediaDetails = (type, data) => {
  const formattedData = {};
  // console.log(type);
  // console.log(data);

  if (type === "movie") {
    formattedData.details = {
      id: data.id,
      title: data.title,
      originalTitle: data.original_title,
      genres: data.genres,
      overview: data.overview,
      voteAvg: data.vote_average,
      status: data.status,
      poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
      productionCompanies: data.production_companies.map(item => item.name),
      productionCountries: data.production_countries.map(item => item.name),
      duration: data.runtime,
      revenue: data.revenue,
      budget: data.budget,
      date: data.release_date,
    }
    formattedData.cast = data.credits.cast.map((item) => getFormattedCreditsItem(item));
    formattedData.crew = data.credits.crew.map((item) => getFormattedCreditsItem(item));
    formattedData.recommendations = data.recommendations.results.map((item) => getFormattedRecommendationItem(item));
  }

  return formattedData;
}

export default getFormattedMediaDetails;