import React from 'react';
import styled from 'styled-components';
import { MdOutlineMan4 } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './index.scss';

import * as iic from './itineraryInfoStyle';

const ItineraryInfo: React.FC = () => {
  // 조건부 렌더링으로 등록 / 신청 구현

  return (
    <>
      <iic.MainContainer>
        itineraryInfoPage
        <iic.InfoCtnr>
          <iic.LabelText>기간</iic.LabelText>
          <iic.TimePickerCtnr>
            <iic.TimePicker>2023.07.07 19:00</iic.TimePicker>
            <iic.TimePicker>2023.07.09 09:00</iic.TimePicker>
          </iic.TimePickerCtnr>
        </iic.InfoCtnr>
        <iic.InfoCtnr>
          <iic.LabelText>위치</iic.LabelText>
          <iic.LocationPickerCtnr>
            <iic.LocationPicker>강원도 강릉시 강릉시 옥천동</iic.LocationPicker>
          </iic.LocationPickerCtnr>
        </iic.InfoCtnr>
        <iic.InfoCtnr>
          <iic.LabelText>오픈채팅 링크</iic.LabelText>
          <iic.ChatLinkCtnr>
            <iic.ChatLink>
              <a href='https://velog.io'>https://velog.io</a>
            </iic.ChatLink>
          </iic.ChatLinkCtnr>
        </iic.InfoCtnr>
        <iic.InfoCtnr>
          <iic.LabelText>소개</iic.LabelText>
          <iic.IntroduceItineraryCtnr>
            <iic.IntroduceItinerary>
              안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?
            </iic.IntroduceItinerary>
          </iic.IntroduceItineraryCtnr>
        </iic.InfoCtnr>
        <iic.InfoCtnr>
          <iic.LabelText>동행</iic.LabelText>
          <iic.CompanionCtnr>
            <iic.CompanionMember>
              <MdOutlineMan4 className='companionIcon' />
            </iic.CompanionMember>
            <iic.CompanionMember>
              <MdOutlineMan4 className='companionIcon' />
            </iic.CompanionMember>
            <iic.CompanionAdd>
              <AiOutlineUserAdd className='companionIcon' />
            </iic.CompanionAdd>
          </iic.CompanionCtnr>
        </iic.InfoCtnr>
        <iic.RegisterSubmitBtn>등록</iic.RegisterSubmitBtn>
      </iic.MainContainer>
    </>
  );
};

export default ItineraryInfo;
