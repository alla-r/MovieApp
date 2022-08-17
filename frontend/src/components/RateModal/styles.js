import styled from 'styled-components';
import CloseIcon from '../../global/images/close-icon.svg';

// eslint-disable-next-line import/prefer-default-export
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: #ffffff;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 20px 20px 30px;
  font-weight: 700;
  font-size: 24px;

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    color: ${(props) => props.theme.colors.dark};

    .close-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      background-color: transparent;
      background-image: url(${CloseIcon});
      background-size: cover;
      border: none;
      cursor: pointer;
      filter: invert(98%) sepia(2%) saturate(1690%) hue-rotate(172deg) brightness(119%)
        contrast(78%);
    }
  }

  .rating-row {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .rating-label {
      margin-left: 15px;
      color: rgba(0, 0, 0, 0.26);
    }
  }

  @media only screen and (max-width: 550px) {
    width: 80%;
    padding: 15px 15px 20px;
    font-weight: 700;
    font-size: 16px;

    .title-row {
      font-size: 20px;

      .close-btn {
        width: 15px;
        height: 15px;
      }
    }

    .rating-row {
      margin-top: 15px;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;

      .rating-label {
        margin-left: 0px;
      }
    }
  }
`;
