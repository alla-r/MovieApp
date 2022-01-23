import React from 'react';
import PropTypes from 'prop-types';
import CircleProgressBar from '../../../../../../components/CircleProgressBar';
import CircularButton from '../../../../../../components/CircularButton';
import { Container, Title, ButtonsWrapper, ProgressBarWrapper, ProgressBarDescription, OverviewWrapper, OverviewTitle, OverviewContent, GenreWrapper } from './styles';
import GenreItem from '../../../../../../components/GenreItem';
import { getPercentageValue } from '../../../../../../global/helpers';

const DetailsBlock = ({ data, circularBtnConfig }) => {
  console.log(data)
  const percentage = getPercentageValue(data.voteAvg, 10);

  const onGenreClickHandler = (id) => console.log(id);

  const genres = data.genres.map(({ id, name }) => (
    <GenreItem key={id} genre={name} onClickHandler={() => onGenreClickHandler(id)} />
  ));

  const buttons = circularBtnConfig.map(({ id, iconSrc, onClickHandler, isActive }) => (
    <CircularButton
      key={id}
      iconSrc={iconSrc}
      onClickHandler={onClickHandler}
      isActive={isActive}
    />
  ))

  return (
    <Container>
      {data && (
        <>
         <Title>{data.title}</Title>
          <ButtonsWrapper>
            <ProgressBarWrapper>
              <CircleProgressBar voteAvg={data.voteAvg} percentage={percentage} />
            </ProgressBarWrapper>
            <ProgressBarDescription>
              Vote Average
            </ProgressBarDescription>
            {buttons}
          </ButtonsWrapper>
          <OverviewWrapper>
            <OverviewTitle>
              Overview
            </OverviewTitle>
            <OverviewContent>
              {data.overview}
            </OverviewContent>
          </OverviewWrapper>
          <GenreWrapper>
            {genres}
          </GenreWrapper>
        </>
       
      )}
      
    </Container>
  );
};

DetailsBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default DetailsBlock;