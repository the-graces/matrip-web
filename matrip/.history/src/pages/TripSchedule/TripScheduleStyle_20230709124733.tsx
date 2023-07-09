import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const postBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid #000 1px;
  border-radius: 16px;
`;

export const profileBox = styled(Link)`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  text-decoration: none;
`;
export const profileImgBox = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 30px;
`;

export const profileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Nickname = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

export const postContent = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const postTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const postPeriod = styled.div`
  font-size: 13px;
  margin-bottom: 10px;

`;

export const LikeBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 10px;
  margin-right: 30px;
`;

export const TripSchedulePostButton = styled.div`
  width: 50%;
  display: flex;
  border-radius: 40px;
  margin: auto;
  margin-top: 15px;
  gap: 20px;
`;

export const TripSchedulePostButtonR = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid #000 1px;
  border-radius: 16px;
`;

export const TripSchedulePostButtonL = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid #000 1px;
  border-radius: 16px;
`;

export const TripScheduleAppList = styled.div`
  width: 100%;
  margin: 15px 0px;

  display: flex;
  flex-direction: column;
`;
