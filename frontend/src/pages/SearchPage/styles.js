import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;

  .search-items--container {
    padding-left: 30px;
    width: calc(100% - 290px);

    .person--container {
      margin-bottom: 20px;
    }
  }

  .pagination--wrapper {
    display: flex;
    justify-content: center;
  }
`;
