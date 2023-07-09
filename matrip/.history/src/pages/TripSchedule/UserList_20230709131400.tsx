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
        <iss.userListPostBox key={post.id}>
          <iss.userListProfileBox to={"/userProfile"}>
            <iss.userListProfileImgBox>
              <iss.userListProfileImg src={post.imgurl} alt="유저 프로필" />
            </iss.userListProfileImgBox>
            <iss.userListNickname>{post.nick}</iss.userListNickname>
          </iss.userListProfileBox>
          <iss.userListPostContent to={"/itineraryInfo"}>
            <iss.userListPostTitle>{post.destination}</iss.userListPostTitle>
            <iss.userListPostPeriod>
              {post.startDate}~{post.endData}
            </iss.userListPostPeriod>
            <iss.userListPostPeriod>현재 {post.personnel}명</iss.userListPostPeriod>
          </iss.userListPostContent>
          <div>
            <iss.userListPLikeBtn>
              <AiOutlineHeart size="24" />
            </iss.userListPLikeBtn>
          </div>
        </iss.userListPostBox>
      ))}
    </>
  );
};

export default UserList;
