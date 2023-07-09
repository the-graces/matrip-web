import React from "react";
import "./index.scss";

import * as iss from "./TripScheduleStyle";
import * as gs from "../../styles/GlobalStyles";
import "./index.scss";
import { fdata } from "../../data/userdata";
import { postdata } from "../../data/postdata";
import { AiOutlineHeart } from "react-icons/ai";

const TripSchedule: React.FC = () => {
  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.postBox key={post.id}>
          <iss.profileBox to={"/userProfile"}>
            <iss.profileImgBox>
              <iss.profileImg src={post.imgurl} alt="유저 프로필" />
            </iss.profileImgBox>
            <iss.Nickname>{post.nick}</iss.Nickname>
          </iss.profileBox>
          <iss.postContent to={"/itineraryInfo"}>
            <iss.postTitle>{post.destination}</iss.postTitle>
            <iss.postPeriod>
              {post.startDate}~{post.endDate}
            </iss.postPeriod>
            <iss.postPeriod>현재 {post.personnel}명</iss.postPeriod>
          </iss.postContent>
          <div>
            <iss.LikeBtn>
              <AiOutlineHeart size="24" />
            </iss.LikeBtn>
          </div>
        </iss.postBox>

        <iss.TripSchedulePostButton>
          <iss.TripSchedulePostButtonR>수정</iss.TripSchedulePostButtonR>
          <iss.TripSchedulePostButtonL>삭제</iss.TripSchedulePostButtonL>
        </iss.TripSchedulePostButton>

        {fdata.map((friend, index) => (
          <iss.TripScheduleAppList key={index}>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList></iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.nick}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
            <iss.TripScheduleAppList>
              <iss.TripScheduleAppList>{friend.id}</iss.TripScheduleAppList>
            </iss.TripScheduleAppList>
          </iss.TripScheduleAppList>
        ))}
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default TripSchedule;
