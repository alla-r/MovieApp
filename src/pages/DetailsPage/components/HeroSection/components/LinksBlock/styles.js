import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 160px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media only screen and (max-width: 1200px) {
    margin-top: 50px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
  }
`;
