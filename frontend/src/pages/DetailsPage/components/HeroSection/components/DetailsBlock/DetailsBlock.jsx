import React from 'react';
import PropTypes from 'prop-types';
import CircleProgressBar from '../../../../../../components/CircleProgressBar';
import { Container, Title, ButtonsWrapper, ProgressBarWrapper, ProgressBarDescription, OverviewWrapper, OverviewTitle, OverviewContent } from './styles';
import { getPercentageValue } from '../../../../../../global/helpers';

const DetailsBlock = ({ data }) => {
  console.log(data)
  const percentage = getPercentageValue(data.voteAvg, 10);

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
          </ButtonsWrapper>
          <OverviewWrapper>
            <OverviewTitle>
              Overview
            </OverviewTitle>
            <OverviewContent>
              {data.overview}
            </OverviewContent>
          </OverviewWrapper>
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