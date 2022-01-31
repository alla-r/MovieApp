import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;
  display: flex;

  @media only screen and (max-width: 450px) {
    margin: 35px auto;
  }
`;

export const Line = styled.div`
  width: 3px;
  height: 44px;
  background-color: ${(props) => props.theme.colors.primary};

  @media only screen and (max-width: 768px) {
    height: 36px;
  }

  @media only screen and (max-width: 450px) {
    height: 24px;
  }
`;

export const HeadingContent = styled.h2`
  margin-left: 15px;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.dark};

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media only screen and (max-width: 450px) {
    margin-left: 10px;
    font-size: 20px;
    line-height: 24px;
  }
`;
