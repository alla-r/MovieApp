import styled from 'styled-components';

export const Background = styled.div`
  padding: 150px 0px;
  background: #1F1F1F;

  @media only screen and (max-width: 1280px) {
    padding: 100px;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px;
  }
`;

export const Container = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1280px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 10px;
  background-image: url(${(props) => props.ImageSrc});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 1280px) {
    width: 37%;
    height: 500px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

// export const DetailsWrapper = styled.div`
//   width: 45%;
//   height: 600px;
//   border-radius: 10px;
//   background-color: red;

//   @media only screen and (max-width: 1280px) {
//     width: 57%;
//     height: 500px;
//   }

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     margin-top: 50px;
//   }
// `;

// export const LinksWrapper = styled.div`
//   width: 200px;
//   height: 600px;
//   background-color: green;
//   @media only screen and (max-width: 1280px) {
//     margin-top: 50px;
//     width: 100%;
//   }
//   @media only screen and (max-width: 768px) {
//   }
// `;