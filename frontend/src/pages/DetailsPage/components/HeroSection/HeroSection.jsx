/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DetailsBlock from './components/DetailsBlock';
import LinksBlock from './components/LinksBlock';
import { Background, Container, ImageWrapper } from './styles';
import * as constants from '../../constants';
import { getCrewListWithUniqueItems } from '../../../../utils/helpers';

function HeroSection({ data, crew }) {
  const { type } = data;
  const filteredCrew = crew.filter(
    ({ job }) => constants.MOVIE_JOBS_TO_DISPLAY_LIST.indexOf(job) !== -1,
  );
  const crewList = getCrewListWithUniqueItems(filteredCrew);

  return (
    <Background>
      <Container className="container">
        <ImageWrapper ImageSrc={data.poster} ImageBackdrop={data.backdrop} />
        <DetailsBlock data={data} circularBtnConfig={constants.CIRCULAR_BUTTONS_CONFIG} />
        <LinksBlock crewList={type === 'tv' ? data.createdBy : crewList} />
      </Container>
    </Background>
  );
}

HeroSection.propTypes = {
  data: PropTypes.object.isRequired,
  crew: PropTypes.array.isRequired,
};

export default HeroSection;
