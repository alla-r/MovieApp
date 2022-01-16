import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 127px;
  background: ${(props) => props.theme.colors.dark};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.42);
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
