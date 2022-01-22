import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 600px;
  background-color: green;
  @media only screen and (max-width: 1280px) {
    margin-top: 50px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
  }
`;
