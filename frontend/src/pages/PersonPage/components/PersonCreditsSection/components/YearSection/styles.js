import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0px;
  border-top: 1px solid #dedede;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;

  &:last-child {
    border-bottom: 1px solid #dedede;
  }
`;

export const Row = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;

  .row-item {
    margin-right: 15px;
  }
`;

export const Year = styled.div`
  text-align: center;
  width: 40px;
`;

export const Circle = styled.div`
  border-radius: 50%;
  height: 13px;
  width: 13px;
  border: ${(props) => `2px solid ${props.theme.colors.dark}`};
`;

export const Title = styled.div`
  font-weight: 700;
  &:hover {
    color: #85cad4;
    cursor: pointer;
  }
`;
