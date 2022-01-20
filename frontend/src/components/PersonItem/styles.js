import styled from 'styled-components';

export const PersonContainer = styled.div`
  width: 400px;
  margin: 0px 20px 50px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  height: 140px;
  width: 110px;
  overflow: hidden;
  border-radius: 10%;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ContentWrapper = styled.div`
  margin-left: 25px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};
`;

export const Character = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: rgba(26, 25, 28, 0.4);
`;
