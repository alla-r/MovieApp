import {
  getFormattedMediaDetails,
  getFormattedGenreList,
  getFormattedListData,
} from './dataFormatters';
import ScrollToTop from './ScrollToTop';

export { getFormattedMediaDetails, ScrollToTop, getFormattedGenreList, getFormattedListData };

export const getFormattedItem = (item) => {
  const formattedItem = {
    id: item.id,
    type: item.media_type,
    date: item.release_date || item.first_air_date,
    title: item.title || item.name,
    description: item.overview,
    voteAvg: item.vote_average,
    poster: `https://image.tmdb.org/t/p/original${item.poster_path}`,
  };

  return formattedItem;
};

const BAR_COLORS = [
  {
    minValue: 70,
    maxValue: 100,
    path: 'rgba(141, 255, 71, 1)',
    trail: 'rgba(141, 255, 71, 0.3)',
  },
  {
    minValue: 30,
    maxValue: 69,
    path: 'rgba(255, 203, 71, 1)',
    trail: 'rgba(255, 203, 71, 0.3)',
  },
  {
    minValue: 0,
    maxValue: 29,
    path: 'rgba(255, 71, 71, 1)',
    trail: 'rgba(255, 71, 71, 0.3)',
  },
];

export const getBarColor = (type, percentageValue) => {
  const colors = BAR_COLORS.find(
    (element) => percentageValue >= element.minValue && percentageValue <= element.maxValue,
  );

  return (colors && colors[type]) || '#5B5B5B';
};

export const getFormattedDate = (dateString) => {
  const dateArray = dateString.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return dateString ? `${months[month - 1].slice(0, 3)} ${day}, ${year}` : "";
};

export const getPercentageValue = (value, maxValue) => (value * 100) / maxValue;

export const getCrewListWithUniqueItems = (list) => {
  const names = new Set(list.map(({ name }) => name));
  const uniqueList = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const uniqueName of names) {
    const jobsArray = list.filter(({ name }) => name === uniqueName).map(({ job }) => job);
    const { id } = list.find(({ name }) => name === uniqueName);
    uniqueList.push({
      id,
      job: jobsArray.join(', '),
      name: uniqueName,
    });
  }

  return uniqueList;
};

export const getFormattedYears = ({ type, date, firstAirDate, lastAirDate }) => {
  let formattedDate;

  if (type === 'movie') {
    formattedDate = date ? date.slice(0, 4) : null;
  }

  if (type === 'tv') {
    const startYear = firstAirDate ? firstAirDate.slice(0, 4) : null;

    const endYear = lastAirDate ? lastAirDate.slice(0, 4) : '...';
    formattedDate = startYear ? `${startYear} - ${endYear}` : "";
  }

  return formattedDate;
};

export const getDuration = ({ duration }) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;

  let formattedDuration = '';

  if (hours) {
    formattedDuration += `${hours}h `;
  }

  if (minutes) {
    formattedDuration += `${minutes}m`;
  }

  return formattedDuration;
};
