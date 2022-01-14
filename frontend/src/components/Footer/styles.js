import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 160px;
  background: ${(props) => props.theme.colors.dark};
  @media only screen and (max-width: 768px) {
    height: 180px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1320px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  height: 20px;
  @media only screen and (max-width: 768px) {
    height: 18px;
  }
`;

export const Content = styled.p`
  margin-left: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.light};
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 30px;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
  }
`;
