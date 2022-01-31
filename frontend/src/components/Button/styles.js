import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.button`
  padding: 12px 44px;
  color: ${({ fontColor }) => fontColor};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50px;
  border: ${({ borderColor }) => `2px solid ${borderColor}`};
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;

  &.disabled {
    color: #727272;
    border-color: #727272;
    cursor: auto;
  }

  &.outline:hover {
    background: ${({ borderColor }) => borderColor};
    color: ${(props) => props.theme.colors.light};
  }

  &.filled:hover {
    background: transparent;
    color: ${({ borderColor }) => borderColor};
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 40px;
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (max-width: 450px) {
    padding: 8px 36px;
    font-size: 14px;
    line-height: 18px;
  }
`;
