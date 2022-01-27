import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;

  @media only screen and (max-width: 1200px) {
    margin: 0px;
  }
`;

export const ItemsContainer = styled.div`
  max-width: 270px;

  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemWrapper = styled.div`
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};

  @media only screen and (max-width: 1200px) {
    width: 45%;

    &:nth-child(2n+1) {
      margin-right: 10%;
    }    
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ItemValue = styled.p`
  font-weight: 400;
`;
