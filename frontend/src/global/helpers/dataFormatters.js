/* eslint-disable camelcase */
const getFormattedPersonItem = (item) => {
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
    formattedData.cast = data.credits.cast.map((item) => getFormattedPersonItem(item));
    formattedData.crew = data.credits.crew.map((item) => getFormattedPersonItem(item));
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
    formattedData.cast = data.credits.cast.map((item) => getFormattedPersonItem(item));
    formattedData.crew = data.credits.crew.map((item) => getFormattedPersonItem(item));
    formattedData.recommendations = data.recommendations.results.map((item) =>
      getFormattedRecommendationItem(item),
    );
  }

  return formattedData;
};

const getAge = (birthday, deathday) => {
  let age;
  let ageDifMs;
  let ageDate;

  if (deathday) {
    ageDifMs = new Date(deathday).getTime() - new Date(birthday).getTime();
    ageDate = new Date(ageDifMs);

    age = Math.abs(ageDate.getUTCFullYear() - 1970);
  } else {
    ageDifMs = new Date() - new Date(birthday).getTime();
    ageDate = new Date(ageDifMs);

    age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return age;
};

const getFormattedPersonDetails = (data = {}) => {
  const formattedDetails = {
    id: data.id,
    name: data.name,
    knownFor: data.known_for_department,
    birthday: `${data.birthday} (${getAge(data.birthday, data.deathday)} years old)`,
    deathday: data.deathday,
    placeOfBirth: data.place_of_birth,
    poster: `https://image.tmdb.org/t/p/original${data.profile_path}`,
    biography: data.biography,
    age: getAge(data.birthday, data.deathday),
  };

  return formattedDetails;
};

const getFormattedGenreList = (genreList, selectedGenresArr) => {
  const formattedGenreList = genreList.map(({ id, name }) => ({
    id,
    name,
    isChosen: selectedGenresArr.includes(id.toString()),
  }));

  return formattedGenreList;
};

const getFormattedItem = (item, type) => {
  const formattedItem = {
    id: item.id,
    type: item.media_type || type,
    date: item.release_date || item.first_air_date || 'unknown',
    title: item.title || item.name,
    description: item.overview,
    voteAvg: item.vote_average || 0,
    poster: `https://image.tmdb.org/t/p/original${item.poster_path}`,
  };

  return formattedItem;
};

const getFormattedListData = ({ page, total_pages, results }, mediaType) => {
  const formattedResultsList =
    results.length > 0 ? results.map((item) => getFormattedItem(item, mediaType)) : results;

  const formattedData = {
    page,
    totalPages: total_pages,
    results: formattedResultsList,
  };

  return formattedData;
};

const getFormattedSearchItem = (item, type) => {
  const formattedItem = {
    id: item.id,
    type: item.media_type || type,
    date: item.release_date || item.first_air_date || 'unknown',
    title: item.title || item.name,
    overview: item.overview,
    poster: `https://image.tmdb.org/t/p/original${item.poster_path}`,
  };

  return formattedItem;
};

const getFormattedSearchData = ({ page, total_pages, total_results, results }, mediaType) => {
  let formattedResultsList;

  if (mediaType === 'people' || mediaType === 'person') {
    formattedResultsList = results.map(getFormattedPersonItem);
  } else {
    formattedResultsList = results.map((item) => getFormattedSearchItem(item, mediaType));
  }

  const formattedData = {
    currentPage: page,
    totalPages: total_pages,
    results: formattedResultsList,
    totalResults: total_results,
  };

  return formattedData;
};

const getFormattedSocialMedia = ({ instagram_id, facebook_id, twitter_id }) => ({
  instagram: instagram_id ? `https://instagram.com/${instagram_id}` : null,
  facebook: facebook_id ? `https://www.facebook.com/${facebook_id}` : null,
  twitter: twitter_id ? `https://twitter.com/${twitter_id}` : null,
});

export {
  getFormattedMediaDetails,
  getFormattedGenreList,
  getFormattedListData,
  getFormattedSearchData,
  getFormattedPersonDetails,
  getFormattedSocialMedia,
};
