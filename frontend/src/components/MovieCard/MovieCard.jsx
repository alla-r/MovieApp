import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {
  CardContainer,
  ImageAndBarContainer,
  ImageWrapper,
  ContentContainer,
  Title,
  Description,
  ProgressBarWrapper,
} from './styles';
import theme from '../../theme';

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

const MovieCard = ({ data, onClickHandler }) => {
  const getPercentageValue = (value, maxValue) => (value * 100) / maxValue;
  const percentage = getPercentageValue(data.voteAvg, 10);

  const getFormattedDate = (dateString) => {
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

  const getBarColor = (type, percentageValue) => {
    const colors = BAR_COLORS.find(
      (element) => percentageValue >= element.minValue && percentageValue <= element.maxValue,
    );

    return (colors && colors[type]) || '#5B5B5B';
  };

  return (
    <CardContainer onClick={onClickHandler}>
      <ImageAndBarContainer>
        <ImageWrapper ImageSrc={data.poster} />
        <ProgressBarWrapper>
          <CircularProgressbar
            value={percentage}
            text={Number.isInteger(data.voteAvg) ? `${data.voteAvg}.0` : data.voteAvg}
            strokeWidth={4}
            background
            backgroundPadding={4}
            styles={buildStyles({
              backgroundColor: `${theme.colors.dark}`,
              textColor: `${theme.colors.light}`,
              pathColor: `${getBarColor('path', percentage)}`,
              trailColor: `${getBarColor('trail', percentage)}`,
            })}
          />
        </ProgressBarWrapper>
      </ImageAndBarContainer>

      <ContentContainer>
        <Title>{data.title}</Title>
        <Description>{getFormattedDate(data.date)}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

MovieCard.defaultProps = {};

MovieCard.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  data: PropTypes.shape({
    voteAvg: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
