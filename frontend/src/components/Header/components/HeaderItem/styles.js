import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
  margin: 0 15px;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  white-space: nowrap;
  display: block;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
