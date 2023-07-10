import { styled } from 'styled-components';

// export const MainContainer = styled.div`
//   background-color: #f0f0f0;
//   max-width: 600px;
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (min-width: 600px) {
//     width: 600px;
//   }
// `;

export const ImgCtnr = styled.div`
  width: 50%;
  // 높이 넓이와 같게
  padding-bottom: 50%;
  position: relative;
  margin: 10px 0px;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const IdCtnr = styled.div`
  margin: 10px 0px;
  font-size: 23px;
  font-weight: 600;
`;

export const IdText = styled.div``;

export const EmailCtnr = styled.div`
  margin: 10px 0px;
  color: grey;
`;

export const EmailText = styled.div``;

export const BirthCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px 0px;
`;

export const BirthText = styled.div``;

export const LabelName = styled.div``;

export const SexCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px 0px;
`;

export const SexText = styled.div``;
