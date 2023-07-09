import React from "react";
import "./index.scss";

import * as iss from "./TripScheduleStyle";
import "./index.scss";
import { fdata } from "../../data/userdata";
import { AiOutlineHeart } from "react-icons/ai";
import { postdata } from "../../data/postdata";

const UserList: React.FC = () => {
  return (
    <>
      {postdata.map((post) => (
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
              {post.startDate}~{post.endData}
            </iss.postPeriod>
            <iss.postPeriod>현재 {post.personnel}명</iss.postPeriod>
          </iss.postContent>
          <div>
            <iss.LikeBtn>
              <AiOutlineHeart size="24" />
            </iss.LikeBtn>
          </div>
        </iss.postBox>
      ))}
    </>
  );
};

export default UserList;
