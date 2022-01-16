import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto 0px;
`;

export const HeadingContent = styled.h2`
  margin-left: 10px;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.dark};
`;
