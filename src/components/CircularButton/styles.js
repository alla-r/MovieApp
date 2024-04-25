import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #313131;
  border-radius: 50%;
  border: none;
  box-sizing: border-box;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Image = styled.img`
  filter: invert(100%) sepia(1%) saturate(795%) hue-rotate(178deg) brightness(117%) contrast(84%);
  &.active {
    filter: invert(80%) sepia(53%) saturate(241%) hue-rotate(139deg) brightness(85%) contrast(95%);
  }

  @media only screen and (max-width: 768px) {
    width: 14px;
  }
`;
