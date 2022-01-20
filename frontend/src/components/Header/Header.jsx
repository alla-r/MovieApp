import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import HeaderItem from './components/HeaderItem';
import ProfileDropdown from './components/ProfileDropdown';
import SearchField from './components/SearchField';
import { Background, Container, FirstColumn, SecondColumn } from './styles';

const Header = ({ isUserAuthorized = false, headerItems, profileDropdownData }) => {
  const navigate = useNavigate();

  const onLogoClickHandler = () => {
    navigate('/');
  };
  const onSignInClickHandler = () => {
    console.log('sign in');
  };
  const onSearchClickHandler = (searchedValue) => {
    console.log(searchedValue);
  };

  const items = headerItems.map(({ content, clickHandler }) => (
    <HeaderItem key={content} content={content} onClickHandler={clickHandler} />
  ));

  return (
    <Background>
      <Container>
        <FirstColumn>
          <Logo size={36} onClickHandler={onLogoClickHandler} />
          {items}
        </FirstColumn>
        <SecondColumn>
          <SearchField onSearchIconClickHandler={onSearchClickHandler} />
          {isUserAuthorized && (
            <HeaderItem content="Sign In" onClickHandler={onSignInClickHandler} />
          )}
          {!isUserAuthorized && <ProfileDropdown avatarContent="AN" data={profileDropdownData} />}
        </SecondColumn>
      </Container>
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
