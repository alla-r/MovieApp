import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../components/Loader';
import DetailsBlock from './components/DetailsBlock';
import LinksBlock from './components/LinksBlock';
import { Background, Container, ImageWrapper } from './styles';
import * as constants from'../../constants';

const HeroSection = ({ data }) => (
  <Background>
    <Container className='container'>
      <ImageWrapper ImageSrc={data.poster} />
      <DetailsBlock data={data} circularBtnConfig={constants.CIRCULAR_BUTTONS_CONFIG} />
      <LinksBlock />
    </Container>
  </Background>
);

HeroSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // mappingConfig: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string,
  //     value: PropTypes.string,
  //     type: PropTypes.string,
  //   }),
  // ).isRequired,
};

export default HeroSection;
