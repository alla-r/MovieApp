import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.dark};
`;

export const Name = styled.h1`
  margin-bottom: 30px;
  line-height: 38px;
  font-weight: 700;
  font-size: 36px;
`;
