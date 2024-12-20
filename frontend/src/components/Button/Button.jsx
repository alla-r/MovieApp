import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';
import theme from '../../theme';

function Button({
  onClickHandler,
  btnText,
  isBtnDisabled = false,
  btnStyles = {
    isFilled: false,
    color: 'primary',
  },
  className = '',
  ...otherProps
}) {
  const { isFilled, color } = btnStyles;
  const classNamesArray = [isFilled ? 'filled' : 'outline'];

  if (isBtnDisabled) {
    classNamesArray.push('disabled');
  }

  const btnProps = {
    ...otherProps,
    fontColor: isFilled ? theme.colors.light : theme.colors[color],
    backgroundColor: isFilled ? theme.colors[color] : 'transparent',
    borderColor: theme.colors[color],
  };

  return (
    <ButtonWrapper
      className={`${className} ${classNamesArray.join(' ')}`}
      onClick={isBtnDisabled ? () => {} : onClickHandler}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...btnProps}
    >
      {btnText}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool,
  btnStyles: PropTypes.shape({
    isFilled: PropTypes.bool,
    color: PropTypes.string,
  }),
  btnText: PropTypes.string.isRequired,
};

export default Button;
