import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto 50px;
`;

export const ItemsContainer = styled.div`
  max-width: 250px;
`;

export const ItemWrapper = styled.div`
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark};
`;

export const ItemTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ItemValue = styled.p`
  font-weight: 400;
`;
