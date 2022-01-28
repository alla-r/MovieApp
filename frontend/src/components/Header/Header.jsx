/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import HeaderItem from './components/HeaderItem';
import ProfileDropdown from './components/ProfileDropdown';
import SearchField from './components/SearchField';
import { Background, NavContainer, NavMenu, SecondColumn } from './styles';

const Header = ({ isUserAuthorized = false, headerItems, profileDropdownData }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowWidth(window.innerWidth), 150);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(windowWidth);
  const isMobile = windowWidth <= 640;

  const onLogoClickHandler = () => {
    navigate('/');
  };
  const onSignInClickHandler = () => {
    console.log('sign in');
  };
  const onSearchClickHandler = (searchedValue) => {
    console.log(searchedValue);
  };

  const items = headerItems.map(({ content, path }) => (
    <HeaderItem key={content} content={content} path={path} />
  ));

  return (
    <Background>
      <NavContainer>
        <Logo size={36} onClickHandler={onLogoClickHandler} />
        <NavMenu>
          {items}
        </NavMenu>
        <SecondColumn>
          <SearchField onSearchIconClickHandler={onSearchClickHandler} />
          {!isUserAuthorized && (
            <HeaderItem content="Sign In" onClickHandler={onSignInClickHandler} />
          )}
          {isUserAuthorized && <ProfileDropdown avatarContent="AN" data={profileDropdownData} />}
        </SecondColumn>
      </NavContainer>
    </Background>
  );
};

Header.defaultProps = {
  isUserAuthorized: false,
};

Header.propTypes = {
  isUserAuthorized: PropTypes.bool,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
    }),
  ).isRequired,
  profileDropdownData: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default Header;
