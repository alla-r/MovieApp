import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  height: 600px;
  border-radius: 10px;
  background-color: red;

  @media only screen and (max-width: 1280px) {
    width: 57%;
    height: 500px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;
