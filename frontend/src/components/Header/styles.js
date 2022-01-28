import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.colors.dark};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.42);
`;

export const NavContainer = styled.nav`
  margin: 0 auto;
  width: 90%;
  max-width: 1480px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* justify-content: space-between; */
`;

export const NavMenu = styled.div`
  margin-left: 20px;
  display: flex;
  width: 100vw;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  align-items: center;
`;
