import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin-bottom: 34px;
  color: ${(props) => props.theme.colors.light};
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  cursor: default;
`;

export const Title = styled.p``;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  cursor: pointer;
`;
