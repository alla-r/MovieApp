import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto 50px;

  .btn-full-credits-list {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.dark};
  }
  .btn-full-credits-list:hover {
    text-decoration: underline;
  }
`;

export const ItemsContainer = styled.div`
  max-width: 840px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Error = styled.div``;
