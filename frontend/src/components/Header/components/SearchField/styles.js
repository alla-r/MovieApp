import styled from 'styled-components';
import SearchIcon from '../../../../global/images/Header/search-icon.svg';
import CloseIcon from '../../../../global/images/close-icon.svg';

export const TextFieldWrapper = styled.form`
  position: relative;
  margin-right: 10px;
`;

export const TextField = styled.input`
  padding: 0 55px 0 21px;
  width: 23vw;
  min-width: 360px;
  max-width: 470px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #85cad4;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.light};
  font-size: 18px;
  line-height: 22px;

  &::placeholder {
    font-size: 14px;
    color: rgba(234, 234, 234, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const TextFieldMobile = styled.input`
  padding: 40px 35px 5px 0px;
  width: 90%;
  display: block;
  margin: 0px auto;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #85cad4;
  color: ${(props) => props.theme.colors.light};
  font-size: 14px;
  line-height: 18px;

  &::placeholder {
    font-size: 14px;
    color: rgba(234, 234, 234, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 18px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${SearchIcon});
  background-size: cover;
  background-position: center center;
  border: none;
  filter: invert(76%) sepia(36%) saturate(344%) hue-rotate(140deg) brightness(96%) contrast(84%);
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 5%;
  top: 40px;
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-position: center center;
  border: none;
  filter: invert(76%) sepia(36%) saturate(344%) hue-rotate(140deg) brightness(96%) contrast(84%);
  cursor: pointer;
`;
