import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto 0px;
  display: flex;
`;

export const Line = styled.div`
  width: 3px;
  height: 44px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const HeadingContent = styled.h2`
  margin-left: 15px;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.dark};
`;
