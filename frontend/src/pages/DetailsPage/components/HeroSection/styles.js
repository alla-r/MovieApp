import styled from 'styled-components';

export const Background = styled.div`
  padding: 150px 0px;
  background: #1f1f1f;

  @media only screen and (max-width: 1200px) {
    padding: 100px 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const Container = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 600px;
  margin-right: 2%;
  border-radius: 10px;
  background-image: url(${(props) => props.ImageSrc});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 1200px) {
    width: 36%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    background-image: url(${(props) => props.ImageBackdrop});
  }
`;
