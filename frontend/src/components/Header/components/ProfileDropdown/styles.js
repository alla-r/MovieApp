import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProfileWrapper = styled.div`
  .MuiAvatar-root {
    background-color: transparent;
    border: ${(props) => `3px solid${props.theme.colors.primary}`};
    width: 55px;
    height: 55px;
  }
`;
