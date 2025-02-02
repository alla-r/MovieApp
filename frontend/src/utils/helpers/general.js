import { toast, Slide } from 'react-toastify';
import { format } from 'date-fns';
import i18next from 'i18next';
import { DATE_LOCALES } from '../i18n/constants';
import * as initConstants from '../../pages/InitComponent/constants';

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

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

// export const getFormattedDate = (dateString) => {
//   const dateArray = dateString.split('-');
//   const year = dateArray[0];
//   const month = dateArray[1];
//   const day = dateArray[2];
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   return dateString !== 'unknown' ? `${months[month - 1].slice(0, 3)} ${day}, ${year}` : '';
// };

export const getFormattedDate = (dateString) => {
  let formattedDate = '';

  if (dateString && dateString !== 'unknown') {
    formattedDate = format(new Date(dateString), 'MMM d, yyyy', {
      locale: DATE_LOCALES[i18next.language],
    });
  }

  return formattedDate;
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
    formattedDate = startYear ? `${startYear} - ${endYear}` : '';
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

export const getUniqueValues = (valuesArray) => [...new Set(valuesArray)];

export const showNotification = (type, message) => {
  const toastConfig = {
    position: 'top-center',
    theme: 'colored',
    autoClose: false,
    transition: Slide,
    hideProgressBar: true,
  };

  if (type === initConstants.NOTIFICATIONS_CONFIG.type.error) {
    toast.error(message, toastConfig);
  }

  if (type === initConstants.NOTIFICATIONS_CONFIG.type.success) {
    toast.success(message, { ...toastConfig, autoClose: 3000 });
  }

  if (type === initConstants.NOTIFICATIONS_CONFIG.type.warning) {
    toast.warn(message, toastConfig);
  }
};
