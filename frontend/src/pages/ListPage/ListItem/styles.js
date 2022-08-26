import styled from 'styled-components';
import CloseIcon from '../../../global/images/close-icon.svg';

export const ItemContainer = styled.div`
  margin-bottom: 20px;
  height: 200px;
  display: flex;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 10px;
  /* cursor: pointer; */

  .content--container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px;
    width: 100%;

    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .date {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: rgba(26, 25, 28, 0.5);

        @media only screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 18px;
        }

        @media only screen and (max-width: 450px) {
          font-size: 10px;
          line-height: 16px;
        }
      }

      .description {
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: rgba(26, 25, 28, 1);

        @media only screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 18px;
        }

        @media only screen and (max-width: 450px) {
          font-size: 10px;
          line-height: 16px;
        }
      }

      .rate--wrapper {
        display: flex;
        align-items: center;

        .star--icon {
          margin-left: 6px;
          margin-right: 12px;
          filter: invert(93%) sepia(21%) saturate(2242%) hue-rotate(322deg) brightness(107%)
            contrast(102%);
        }
      }
    }
  }
`;

export const MediaImage = styled.img`
  width: 140px;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  object-fit: cover;
  cursor: pointer;
`;

export const Title = styled.h6`
  width: fit-content;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ChangeRateButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #a9a6b0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${CloseIcon});
  background-size: cover;
  border: none;
  cursor: pointer;
  filter: invert(98%) sepia(2%) saturate(1690%) hue-rotate(172deg) brightness(119%) contrast(78%);
`;

export const ListItem = styled.div`
  margin-bottom: 20px;
  height: 200px;
  display: flex;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 10px;

  .poster {
    width: 140px;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;
    cursor: pointer;
  }

  .content-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px;
    width: 100%;

    .close-icon {
      width: 15px;
      filter: invert(98%) sepia(2%) saturate(1690%) hue-rotate(172deg) brightness(119%)
        contrast(78%);
      cursor: pointer;
    }

    .title {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: ${(props) => props.theme.colors.dark};
      cursor: pointer;

      @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }

      @media only screen and (max-width: 450px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    .date {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(26, 25, 28, 0.5);

      @media only screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }

      @media only screen and (max-width: 450px) {
        font-size: 10px;
        line-height: 16px;
      }
    }

    .description {
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(26, 25, 28, 1);

      @media only screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }

      @media only screen and (max-width: 450px) {
        font-size: 10px;
        line-height: 16px;
      }
    }
  }
`;
