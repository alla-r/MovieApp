import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin-right: 30px;

  .poster {
    width: 300px;
    height: 450px;
    border-radius: 8px;
  }
`;

export const SocialMediaButtonsWrapper = styled.div`
  margin-top: 20px;

  @media only screen and (max-width: 760px) {
    margin-top: 10px;
  }
`;

export const InfoSection = styled.div`
  margin-top: 35px;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};

  .info-section--title {
    margin-bottom: 20px;
    font-size: 26px;
  }

  @media only screen and (max-width: 760px) {
    margin-top: 10px;
  }
`;

export const ItemWrapper = styled.div``;

export const ItemTitle = styled.p`
  font-weight: 700;
  margin-bottom: 2px;
`;

export const ItemValue = styled.p`
  font-weight: 400;
  margin-bottom: 15px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
