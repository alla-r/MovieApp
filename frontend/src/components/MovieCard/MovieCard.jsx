import PropTypes from 'prop-types';
import { getPercentageValue, getFormattedDate } from '../../global/helpers';
import CircleProgressBar from '../CircleProgressBar';
import {
  CardContainer,
  ImageAndBarContainer,
  ImageWrapper,
  ContentContainer,
  Title,
  Description,
  ProgressBarWrapper,
} from './styles';

const MovieCard = ({ data, onClickHandler }) => {
  const percentage = getPercentageValue(data.voteAvg, 10);

  return (
    <CardContainer onClick={onClickHandler}>
      <ImageAndBarContainer>
        <ImageWrapper ImageSrc={data.poster} />
        <ProgressBarWrapper>
          <CircleProgressBar voteAvg={data.voteAvg} percentage={percentage} />
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
