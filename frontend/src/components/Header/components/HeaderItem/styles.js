import styled from 'styled-components';

export const Item = styled.div`
  margin: 0 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
