import styled from 'styled-components';

export const CardContainer = styled.div`
  padding-bottom: 15px;
  margin: 0px 10px 50px 10px;
  width: 268px;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.32));
  cursor: pointer;
`;

export const ImageAndBarContainer = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px 10px 0 0;
  background-image: url(${(props) => props.ImageSrc});
  background-size: cover;
  background-position: center center;
`;

export const ContentContainer = styled.div`
  margin: 30px auto 0;
  width: 90%;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.dark}; 
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgba(26, 25, 28, 0.5);
`;

export const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: -25px;
  left: 5%;
  width: 50px;
  .CircularProgressbar .CircularProgressbar-text {
    font-weight: 600;
    font-size: 24px;
    line-height: 15px;
    dominant-baseline: middle;
    text-anchor: middle;
}
`;
