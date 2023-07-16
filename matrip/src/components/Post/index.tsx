import React, { useEffect, useRef, useState } from 'react';
import { postdata } from '../../data/postdata';
import * as ps from './postStyle';
import DibsBtn from '../DibsBtn';

interface PostProps {
  searchInput: string;
}

const Post: React.FC<PostProps> = ({ searchInput }) => {
  const target = useRef(null);
  const [filteredPostdata, setFilteredPostdata] = useState<any[]>([]);

  useEffect(() => {
    const options = {
      threshold: 0.5
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const targetElement = entries[0].target as HTMLElement;
      if (targetElement && entries[0].isIntersecting) {
        const filteredData = postdata.filter((post: any) =>
          post.destination.includes(searchInput)
        );
        if (filteredData.length > 0) {
          loadMoreData();
        }
      }
    };

    const observer = new IntersectionObserver(callback, options);

    const currentTarget = target.current;

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [searchInput]);

  const loadMoreData = () => {
    const dummyData = [
      {
        id: 4,
        destination: '더미 제주도',
        startDate: '2023-07-15',
        endDate: '2023-07-20',
        personnel: 3
      },
      {
        id: 5,
        destination: '더미 강릉',
        startDate: '2023-07-18',
        endDate: '2023-07-25',
        personnel: 2
      },
      {
        id: 6,
        destination: '더미 광주',
        startDate: '2023-07-22',
        endDate: '2023-07-29',
        personnel: 4
      }
    ];

    setFilteredPostdata((prevData) => [...prevData, ...dummyData]);
  };

  useEffect(() => {
    const updatedFilteredPostdata = postdata.filter((post: any) =>
      post.destination.includes(searchInput)
    );
    setFilteredPostdata(updatedFilteredPostdata);
  }, [searchInput]);

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
            </ps.profileBox>

            <ps.postContent to={'/itineraryInfo'}>
              <ps.postTitle>{post.destination}</ps.postTitle>
              <ps.postPeriod>
                {post.startDate}~{post.endDate}
              </ps.postPeriod>
              <ps.postPeriod>현재 {post.personnel}명</ps.postPeriod>
            </ps.postContent>
            <ps.postDibsBtn>
              <DibsBtn id={post.id} state={post.state} />
            </ps.postDibsBtn>
            <ps.postDibsBtn>
              <DibsBtn id={post.id} state={post.state} />
            </ps.postDibsBtn>
          </ps.postBox>
        ))
      )}
      <div style={{ height: '30px', backgroundColor: 'red' }} ref={target}>
        target
      </div>
    </>
  );
};

export default Post;
