import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { postdata } from '../../data/postdata';
import * as ms from './mainStyle';

const Post: React.FC = () => {
  return (
    <>
      {postdata.map((post) => {
        return (
          <ms.postBox key={post.id}>
            <ms.profileBox to={'/userProfile'}>
              <ms.profileImgBox>
                <ms.profileImg src={post.imgurl} alt='유저 프로필' />
              </ms.profileImgBox>
              <ms.Nickname>{post.nick}</ms.Nickname>
            </ms.profileBox>
            <ms.postContent to={'/itineraryInfo'}>
              <ms.postTitle>{post.destination}</ms.postTitle>
              <ms.postPeriod>
                {post.startDate}~{post.endData}
              </ms.postPeriod>
              <ms.postPeriod>현재 {post.personnel}명</ms.postPeriod>
            </ms.postContent>
            <div>
              <ms.LikeBtn>
                <AiOutlineHeart size='24' />
              </ms.LikeBtn>
            </div>
          </ms.postBox>
        );
      })}
    </>
  );
};

export default Post;
