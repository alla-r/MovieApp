import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  height: 600px;
  border-radius: 10px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.light};

  @media only screen and (max-width: 1280px) {
    width: 57%;
    height: 500px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.light};
`;

export const ButtonsWrapper = styled.div`
  margin: 60px 0px;
  display: flex;
  align-items: center;
`;

export const ProgressBarWrapper = styled.div`
  width: 60px;
  height: 60px;
`;

export const ProgressBarDescription = styled.div`
  margin-left: 10px;
  margin-right: 54px;
  width: 60px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const OverviewWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const OverviewTitle = styled.p`
  margin-bottom: 18px;
  font-weight: 700;
`;

export const OverviewContent = styled.p``;

export const GenreWrapper = styled.div`
  margin-top: 60px;
`;
