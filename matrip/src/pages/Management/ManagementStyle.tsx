import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const postBox = styled.div`
  width: 580px;
  height: 180px;
  padding: 10px;
  display: flex;
  position: relative;
`;

export const profileBox = styled(Link)`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const profileImgBox = styled.div`
  width: 160px;
  height: 160px;
`;

export const profileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
`;

export const postContent = styled(Link)`
  color: #000;
  height: 160px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  top: 50;
`;

export const postTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const postPeriod = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: gray;
`;

export const postPersonKing = styled.div`
  bottom: 15px;
  right: 15px;
  position: absolute;
`;

export const postPeriodCount = styled.div`
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  width: 100%;
  color: #000000;
`;

export const postDibsBtn = styled.div`
  position: absolute;
  right: 40px;
`;

export const PostButton = styled.div`
  width: 100%;
  display: flex;
  border-radius: 40px;
  justify-content: center;
  margin: auto;
  margin-top: 15px;
  gap: 20px;
`;

export const PostButtonL = styled.div`
  width: 162px;
  height: 42px;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  background-color: #056676;
  color: white;
  border-radius: 16px 16px 0px 0px;
  justify-content: center;
`;

export const PostButtonR =  styled(Link)`
  width: 162px;
  height: 42px;
  display: flex;
  align-items: center;
  background-color: #5eaaa8;
  color: white;
  border-radius: 16px;
  justify-content: center;
`;

export const ApplicationBackGround = styled.div`
  width: 100%;
  border-top: 1px solid #056676;
`;

export const ManagementBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ManagementBtnL = styled.button`
  width: 42px;
  height: 42px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #056676;
  color: white;
  border-radius: 100%;
  justify-content: center;
`;

export const ManagementBtnR = styled.button`
  width: 42px;
  height: 42px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  color: white;
  border-radius: 100%;
  justify-content: center;
`;

