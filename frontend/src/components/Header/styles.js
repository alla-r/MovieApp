import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 127px;
  background: ${(props) => props.theme.colors.dark};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1320px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FirstColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const SecondColumn = styled.div`
  display: flex;
  align-items: center;
`;
