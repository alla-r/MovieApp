import styled from 'styled-components';

export const PanelWrapper = styled.div`
  width: 260px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 8px;

  h3 {
    padding: 20px;
    border-radius: 8px 8px 0 0;
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ListItemWrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.selected ? 'rgba(0, 0, 0, 0.07)' : '#fff')};
  font-size: 1em;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  line-height: 1.4em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);

    span {
      background-color: #ffffff;
    }
  }

  span {
    background-color: ${(props) => (props.selected ? '#fff' : 'rgba(0, 0, 0, 0.07)')};
  }
`;

export const NumberLabel = styled.span`
  padding: 0px 10px;
  border-radius: 8px;
  font-size: 0.8em;
  font-weight: 300;
`;
