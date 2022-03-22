/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as BurgerMenu } from 'react-burger-menu';
import Logo from '../Logo';
import HeaderItem from './components/HeaderItem';
import ProfileDropdown from './components/ProfileDropdown';
import SearchField from './components/SearchField';
import { Background, NavContainer, NavMenu, SearchIconButton, SecondColumn } from './styles';

const Header = ({ isUserAuthorized, headerItems, profileDropdownData }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const menuItemsClickHandler = (customClickHandler) => {
    setIsMenuOpen(false);
    customClickHandler();
  };

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowWidth(window.innerWidth), 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 1080;

  const onLogoClickHandler = () => {
    navigate('/');
  };

  const onSignInClickHandler = () => {
    console.log('sign in');
  };

  const searchSubmitHandler = (searchedValue) => {
    console.log(searchedValue);
  };

  const showSearchInput = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const closeSearchInput = () => {
    setIsSearchBarOpen(false);
  };

  const getMobileItems = (data) => {
    const mobileItems = data.map(({ content, onClickHandler }) => (
      <HeaderItem
        key={content}
        content={content}
        onClickHandler={() => menuItemsClickHandler(onClickHandler)}
      />
    ));

    return mobileItems;
  };

  const items = headerItems.map(({ content, onClickHandler, path }) => (
    <HeaderItem key={content} content={content} onClickHandler={onClickHandler} path={path} />
  ));

  const signInItem = (
    <HeaderItem
      content="Sign In"
      onClickHandler={() => menuItemsClickHandler(onSignInClickHandler)}
    />
  );

  return (
    <Background>
      {isMobile && isSearchBarOpen && (
        <SearchField
          submitHandler={searchSubmitHandler}
          isMobileMode
          closeBtnClickHandler={closeSearchInput}
        />
      )}
      {isMobile && !isSearchBarOpen && (
        <>
          <div className="container">
            <Logo size={36} onClickHandler={onLogoClickHandler} />
          </div>
          <SearchIconButton onClick={showSearchInput} />
          <BurgerMenu
            right
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          >
            {getMobileItems(headerItems)}
            {isUserAuthorized ? getMobileItems(profileDropdownData) : signInItem}
          </BurgerMenu>
        </>
      )}
      {!isMobile && (
        <NavContainer>
          <Logo size={36} onClickHandler={onLogoClickHandler} />
          <NavMenu>{items}</NavMenu>
          <SecondColumn>
            <SearchField submitHandler={searchSubmitHandler} />
            {!isUserAuthorized && (
              <HeaderItem content="Sign In" onClickHandler={onSignInClickHandler} />
            )}
            {isUserAuthorized && <ProfileDropdown avatarContent="AN" data={profileDropdownData} />}
          </SecondColumn>
        </NavContainer>
      )}
    </Background>
  );
};

Header.defaultProps = {
  isUserAuthorized: true,
};

Header.propTypes = {
  isUserAuthorized: PropTypes.bool,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      path: PropTypes.string,
      onClickHandler: PropTypes.func,
    }),
  ).isRequired,
  profileDropdownData: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      path: PropTypes.string,
      onClickHandler: PropTypes.func,
    }),
  ).isRequired,
};

export default Header;
