import getFormattedMediaDetails from "./getFormattedMediaDetails";

export {
  getFormattedMediaDetails
}

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

  return `${months[month - 1].slice(0, 3)} ${day}, ${year}`;
};

export const getPercentageValue = (value, maxValue) => (value * 100) / maxValue;
