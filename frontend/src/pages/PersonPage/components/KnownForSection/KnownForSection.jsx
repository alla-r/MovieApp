/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Container, CardItem, ImageWrapper, Title } from './styles';

function KnownForSection({ data, onItemClick = () => {} }) {
  const { t } = useTranslation();

  const slides = data.map(({ type, title, id, poster }) => (
    <SwiperSlide key={id}>
      <CardItem onClick={() => onItemClick(type, id)}>
        <ImageWrapper ImageSrc={poster} />
        <Title>{title}</Title>
      </CardItem>
    </SwiperSlide>
  ));

  return (
    <Container>
      {data.length > 5 && (
        <>
          <div className="person-page--title">{t('knownFor')}</div>
          <Swiper
            modules={[Scrollbar]}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              580: {
                slidesPerView: 2.5,
                spaceBetween: 7,
              },
              920: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              1450: {
                slidesPerView: 5.5,
                spaceBetween: 15,
              },
              1600: {
                slidesPerView: data.length <= 7 ? data.length : 7.5,
                spaceBetween: 20,
              },
            }}
            scrollbar={{
              draggable: true,
              dragSize: 80,
            }}
          >
            {slides}
          </Swiper>
        </>
      )}
    </Container>
  );
}

KnownForSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onItemClick: PropTypes.func,
};

export default KnownForSection;
