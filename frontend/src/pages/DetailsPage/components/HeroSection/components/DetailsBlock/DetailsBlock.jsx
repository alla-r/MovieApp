import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CircleProgressBar from '../../../../../../components/CircleProgressBar';
import CircularButton from '../../../../../../components/CircularButton';
import {
  Container,
  Title,
  ButtonsWrapper,
  ProgressBarWrapper,
  ProgressBarDescription,
  OverviewWrapper,
  OverviewTitle,
  OverviewContent,
  GenreWrapper,
  DetailsWrapper,
  Item,
  Divider,
} from './styles';
import GenreItem from '../../../../../../components/GenreItem';
import {
  getPercentageValue,
  getFormattedYears,
  getDuration,
} from '../../../../../../utils/helpers';

function DetailsBlock({ data, circularBtnConfig }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const percentage = getPercentageValue(data.voteAvg, 10);

  const onGenreClickHandler = (id) =>
    navigate({
      pathname: `/${data.type}`,
      search: `?${createSearchParams({ genre: id })}`,
    });

  const genres = data.genres.map(({ id, name }) => (
    <GenreItem key={id} genre={name} onClickHandler={() => onGenreClickHandler(id)} />
  ));

  const buttons = circularBtnConfig.map(
    ({ id, iconSrc, onClickHandler, isActive, tooltipActive, tooltipInactive }) => (
      <CircularButton
        key={id}
        iconSrc={iconSrc}
        onClickHandler={onClickHandler}
        isActive={isActive}
        tooltipActive={tooltipActive}
        tooltipInactive={tooltipInactive}
      />
    ),
  );

  const formattedYears = getFormattedYears(data);

  return (
    <Container>
      <Title>{data.title}</Title>
      <DetailsWrapper>
        <Item>{formattedYears}</Item>
        {formattedYears && <Divider />}
        <Item>{getDuration(data)}</Item>
      </DetailsWrapper>
      <ButtonsWrapper>
        <ProgressBarWrapper>
          <CircleProgressBar voteAvg={data.voteAvg} percentage={percentage} />
        </ProgressBarWrapper>
        <ProgressBarDescription>{t('voteAverage')}</ProgressBarDescription>
        {buttons}
      </ButtonsWrapper>
      <OverviewWrapper>
        <OverviewTitle>{t('overview')}</OverviewTitle>
        <OverviewContent>{data.overview}</OverviewContent>
      </OverviewWrapper>
      <GenreWrapper>{genres}</GenreWrapper>
    </Container>
  );
}

DetailsBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  circularBtnConfig: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string,
      id: PropTypes.string,
      isActive: PropTypes.bool,
      onClickHandler: PropTypes.func,
    }),
  ).isRequired,
};

export default DetailsBlock;
