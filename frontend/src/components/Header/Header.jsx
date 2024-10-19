import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { slide as BurgerMenu } from 'react-burger-menu';
import Logo from '../Logo';
import HeaderItem from './components/HeaderItem';
import ProfileDropdown from './components/ProfileDropdown';
import SearchField from './components/SearchField';
import {
  Background,
  NavContainer,
  NavMenu,
  SearchIconButton,
  SecondColumn,
  LanguageButton,
} from './styles';
import * as i18nConstants from '../../utils/i18n/constants';

function Header({ isUserAuthorized = false, headerItems, profileDropdownData }) {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    const currentLanguage = i18n.language.toUpperCase();
    const index = i18nConstants.LANGUAGES.findIndex((el) => el === currentLanguage);
    let nextLanguageIndex;
    if (index !== -1) {
      nextLanguageIndex = index + 1 < i18nConstants.LANGUAGES.length ? index + 1 : 0;
    } else {
      nextLanguageIndex = 0;
    }
    const nextLanguage = i18nConstants.LANGUAGES[nextLanguageIndex];

    i18n.changeLanguage(i18nConstants.LOCALES[nextLanguage]);
    window.location.reload(false);
  };

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

  const searchSubmitHandler = (query) => {
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({
        type: 'movie',
        page: 1,
        query,
      })}`,
    });
  };

  const showSearchInput = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const closeSearchInput = () => {
    setIsSearchBarOpen(false);
  };

  const getMobileItems = (data) => {
    const mobileItems = data.map(({ content, onClickHandler, path }) => (
      <HeaderItem
        key={content}
        path={path}
        content={content}
        onClickHandler={() => menuItemsClickHandler(onClickHandler)}
      />
    ));

    return mobileItems;
  };

  const items = headerItems.map(({ content, onClickHandler, path }) => (
    <HeaderItem key={content} content={content} onClickHandler={onClickHandler} path={path} />
  ));

  const signInItem = <HeaderItem content={t('login')} path="/auth/login" />;

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
        <div className="mobile-header">
          <div className="logo--container">
            <Logo size={36} onClickHandler={onLogoClickHandler} />
          </div>
          <div>
            <LanguageButton onClick={changeLanguageHandler}>
              {i18n.language.toUpperCase()}
            </LanguageButton>
            <SearchIconButton onClick={showSearchInput} />

            <BurgerMenu
              right
              isOpen={isMenuOpen}
              onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
            >
              {getMobileItems(headerItems)}
              {isUserAuthorized ? getMobileItems(profileDropdownData) : signInItem}
            </BurgerMenu>
          </div>
        </div>
      )}
      {!isMobile && (
        <NavContainer>
          <Logo size={36} onClickHandler={onLogoClickHandler} />
          <NavMenu>{items}</NavMenu>
          <SecondColumn>
            <SearchField submitHandler={searchSubmitHandler} />
            <LanguageButton onClick={changeLanguageHandler}>
              {i18n.language.toUpperCase()}
            </LanguageButton>
            {!isUserAuthorized && signInItem}
            {isUserAuthorized && <ProfileDropdown avatarContent="AN" data={profileDropdownData} />}
          </SecondColumn>
        </NavContainer>
      )}
    </Background>
  );
}

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
