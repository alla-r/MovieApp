import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Image } from './styles';

const CircularButton = ({ onClickHandler, isActive, iconSrc }) => {
  const classNames = isActive ? 'active' : '';

  return (
    <ButtonWrapper onClick={onClickHandler}>
      <Image className={classNames} src={iconSrc} />
    </ButtonWrapper>
  );
};

CircularButton.defaultProps = {
  isActive: false,
};

CircularButton.propTypes = {
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
};

export default CircularButton;
