import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { getPercentageValue, getBarColor, getFormattedDate } from '../../global/helpers';
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

const MovieCard = ({ data, onClickHandler }) => {
  const percentage = getPercentageValue(data.voteAvg, 10);

  return (
    <CardContainer onClick={onClickHandler} >
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
