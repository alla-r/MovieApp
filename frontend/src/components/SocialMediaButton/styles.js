import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Image = styled.img`
  filter: invert(18%) sepia(15%) saturate(0%) hue-rotate(241deg) brightness(100%) contrast(98%);
  margin-right: 13px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 25px;
  }
`;
