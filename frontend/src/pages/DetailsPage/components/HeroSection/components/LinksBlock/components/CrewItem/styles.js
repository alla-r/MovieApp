import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-width: 160px;
  margin-bottom: 34px;
  color: ${(props) => props.theme.colors.light};
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  cursor: default;

  @media only screen and (max-width: 768px) {
    min-width: 200px;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Title = styled.p``;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  cursor: pointer;
`;
