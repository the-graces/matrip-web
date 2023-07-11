import React from 'react';
import { postdata } from '../../data/postdata';
import * as ps from './postStyle';
import DibsBtn from '../DibsBtn';

const Post: React.FC = () => {
  return (
    <>
      {postdata.map((post) => {
        return (
          <ps.postBox key={post.id}>
            <ps.profileBox to={'/userProfile'}>
              <ps.profileImgBox>
                <ps.profileImg src={post.imgurl} alt='유저 프로필' />
              </ps.profileImgBox>
              <ps.Nickname>{post.nick}</ps.Nickname>
            </ps.profileBox>
            <ps.postContent to={'/itineraryInfo'}>
              <ps.postTitle>{post.destination}</ps.postTitle>
              <ps.postPeriod>
                {post.startDate}~{post.endData}
              </ps.postPeriod>
              <ps.postPeriod>현재 {post.personnel}명</ps.postPeriod>
            </ps.postContent>
            <div>
              <DibsBtn />
            </div>
          </ps.postBox>
        );
      })}
    </>
  );
};

export default Post;
