import styled from 'styled-components';
import SearchIcon from '../../../../global/images/Header/search-icon.svg';

export const TextFieldWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`;

export const TextField = styled.input`
  padding: 0 55px 0 21px;
  width: 27vw;
  min-width: 415px;
  max-width: 470px;
  height: 54px;
  background-color: transparent;
  border: 2px solid #85cad4;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.light};
  font-size: 18px;
  line-height: 22px;

  &::placeholder {
    color: rgba(234, 234, 234, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 21px;
  top: 12px;
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
