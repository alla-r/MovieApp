import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 35px;
  width: 100%;

  .swiper-scrollbar {
    background-color: rgba(133, 202, 212, 0.2);
    width: 100%;
    left: 0;
  }

  .swiper-scrollbar-drag {
    background-color: rgba(133, 202, 212, 1);
  }
`;

export const CardItem = styled.div`
  padding-bottom: 35px;
  width: 100%;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background-image: url(${(props) => props.ImageSrc});
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.p`
  margin-top: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;
