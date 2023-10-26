import styled from 'styled-components';

export const PersonContainer = styled.div`
  width: 400px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:nth-child(odd) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 1200px) {
    width: 45%;

    &:nth-child(odd) {
      margin-right: 10%;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const ImageWrapper = styled.div`
  height: ${({ size }) => (size === 'big' ? '140px' : '80px')};
  width: ${({ size }) => (size === 'big' ? '110px' : '80px')};
  overflow: hidden;
  border-radius: 10%;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    height: 80px;
    width: 60px;
  }
`;

export const ContentWrapper = styled.div`
  width: 265px;
  margin-left: 25px;
  font-size: 16px;
  line-height: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
`;

export const Character = styled.p`
  margin-top: 10px;
  font-weight: 500;
  color: rgba(26, 25, 28, 0.4);

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;
