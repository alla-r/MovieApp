import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto 50px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
  }
`;

export const CardItem = styled.div`
  width: 300px;
`;

// export const ImageWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 170px;
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
