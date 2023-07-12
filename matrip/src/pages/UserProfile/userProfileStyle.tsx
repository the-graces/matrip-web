import { styled } from 'styled-components';


export const ProfileCard = styled.div`
  background-color: #fff;
  border-radius: 25px;
  overflow: hidden;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
  margin-top: 15px;
`

export const ImgCtnr = styled.div`
  width: 100%;
  // 높이 넓이와 같게
  padding-bottom: 100%; 
  position: relative;
  margin: 0px 0px;
`;

export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  
`;

export const InfoCtnr = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 13px;
  
`

export const IdCtnr = styled.div`
  margin: 10px 0px;
  font-size: 23px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  margin: 10px 0px;
`;

export const BirthText = styled.div``;

export const LabelName = styled.div``;

export const SexCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`;

export const SexText = styled.div``;
