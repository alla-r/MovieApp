/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Heading from '../../../../components/Heading';
import { Container, CardItem, ImageWrapper, Title } from './styles';

const Recommendations = ({ data }) => {
  SwiperCore.use([Scrollbar]);
  const navigate = useNavigate();
  // console.log(data);

  const slides = data.map(({ type, backdrop, title, id }) => (
    <SwiperSlide key={id}>
      <CardItem onClick={() => navigate(`../../${type}/${id}`)}>
        <ImageWrapper ImageSrc={backdrop} />
        <Title>{title}</Title>
      </CardItem>
    </SwiperSlide>
  ));

  return (
    <Container className="container">
      <Heading content="More like this" />
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          580: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        scrollbar={{
          draggable: true,
          dragSize: 80,
        }}
      >
        {slides}
      </Swiper>
    </Container>
  );
};

// navigate(`${type}/${id}`);

Recommendations.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      backdrop: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Recommendations;
