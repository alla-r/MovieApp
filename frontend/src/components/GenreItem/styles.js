import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GenreItemWrapper = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 22px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border: ${(props) => `1px solid ${props.theme.colors.secondary}`};
  border-radius: 50px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.light};
  }
`;
