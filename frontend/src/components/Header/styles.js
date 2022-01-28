import styled from 'styled-components';
import SearchIcon from '../../global/images/Header/search-icon.svg';

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.colors.dark};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.42);

  .container {
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .bm-overlay {
    top: 0px;
  }

  .bm-menu-wrap {
    top: 0px;

    .bm-menu {
      padding: 35px 10px;
      background: ${(props) => props.theme.colors.dark};

      .bm-item-list > div {
        margin-bottom: 20px;
      }
    }

    .bm-cross {
      background-color: ${(props) => props.theme.colors.light};
    }
  }

  .bm-burger-button {
    position: absolute;
    width: 30px;
    height: 24px;
    right: 10%;
    top: 38px;
    
    .bm-burger-bars {
      background-color: ${(props) => props.theme.colors.light};
      border-radius: 10px;
      height: 8% !important;
    }
  }
`;

export const NavContainer = styled.nav`
  margin: 0 auto;
  width: 90%;
  max-width: 1480px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavMenu = styled.div`
  margin-left: 20px;
  display: flex;
  width: 100vw;
`;

export const SecondColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIconButton = styled.button`
  position: absolute;
  right: 15%;
  top: 35px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${SearchIcon});
  background-size: cover;
  background-position: center center;
  border: none;
  filter: invert(100%) sepia(6%) saturate(289%) hue-rotate(217deg) brightness(115%) contrast(84%);
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media only screen and (max-width: 768px) {
    right: 17%;
  }

  @media only screen and (max-width: 550px) {
    right: 19%;
  }

  @media only screen and (max-width: 420px) {
    right: 20%;
  }
`;
