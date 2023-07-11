import React from 'react';
import { postdata } from '../../data/postdata';
import * as ps from './postStyle';
import DibsBtn from '../DibsBtn';

interface PostProps {
  searchInput: string;
}

const Post: React.FC<PostProps> = ({ searchInput }) => {
  const filteredPostdata = postdata.filter((post: any) =>
    post.destination.includes(searchInput)
  );

  return (
    <>
      {filteredPostdata.length === 0 ? (
        <p>찾으시는 정보가 없습니다.</p>
      ) : (
        filteredPostdata.map((post: any) => (
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
              <DibsBtn id={post.id} state={post.dibs} />
            </div>
          </ps.postBox>
        ))
      )}
    </>
  );
};

export default Post;
