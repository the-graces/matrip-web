import React, { useState } from 'react';
import './index.scss';
import * as iss from './ManagementStyle';
import * as gs from '../../styles/GlobalStyles';

import { postdata } from '../../data/postdata';
import Slide from './ManagementSlide/Slide';
import { AiOutlineCheck } from 'react-icons/ai';
import { PiCrownSimpleFill } from 'react-icons/pi';
import { FiX } from 'react-icons/fi';

const Management: React.FC = () => {
  const post = postdata[0];


  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.postBox key={post.id}>
          <iss.profileBox to={'/userProfile'}>
            <iss.profileImgBox>
              <iss.profileImg src={post.imgurl} alt='유저 프로필' />
            </iss.profileImgBox>
          </iss.profileBox>

          <iss.postContent to={'/itineraryInfo'}>
            <iss.postTitle>{post.destination}</iss.postTitle>
            <iss.postPeriod>
              {post.startDate}~{post.endDate}
            </iss.postPeriod>
          </iss.postContent>

          <iss.postPersonKing>
            <PiCrownSimpleFill size='30' color='#ffd600' />
            <iss.postPeriodCount>{post.personnel}명</iss.postPeriodCount>
          </iss.postPersonKing>
        </iss.postBox>

        <iss.PostButton>
          <iss.PostButtonL>신청 관리</iss.PostButtonL>
          <iss.PostButtonR to={'/ItineraryInfo'}>여정 수정 </iss.PostButtonR>
        </iss.PostButton>

        <iss.ApplicationBackGround>
          <Slide></Slide>
        </iss.ApplicationBackGround>

        <iss.ManagementBtn>
          <iss.ManagementBtnL>
            <AiOutlineCheck size='24' />
          </iss.ManagementBtnL>
          <iss.ManagementBtnR>
            <FiX size='24' />
          </iss.ManagementBtnR>
        </iss.ManagementBtn>      
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default Management;
