import styled from 'styled-components';

export const Link = styled.a`
  margin-right: 13px;
`;

export const Image = styled.img`
  filter: invert(18%) sepia(15%) saturate(0%) hue-rotate(241deg) brightness(100%) contrast(98%);
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 25px;
  }
`;
