import styled from 'styled-components';

export const LogoContainer = styled.div``;

export const LogoFirstPart = styled.div`
  font-weight: 700;
  font-size: ${({ size }) => `${size}px`};
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
`;

export const LogoColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;
