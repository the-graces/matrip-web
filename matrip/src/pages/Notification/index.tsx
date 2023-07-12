import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { notificationdata } from '../../data/notificationdata';
import * as gs from '../../styles/GlobalStyles';
import * as ns from './notificationStyle';

type NotificationType = 'accept' | 'request' | 'companion' | 'update';

const noticeMsgs: Record<NotificationType, string> = {
  accept: '신청을 수락했습니다!',
  request: '참가 신청했습니다!',
  companion: '동행자로 추가했습니다.',
  update: '여행 정보가 변경되었습니다.'
};

const getMsg = (notice: { type?: NotificationType }) => {
  const msg = noticeMsgs[notice?.type as NotificationType];

  if (msg) {
    return `${msg}`;
  } else {
    return '';
  }
};

function Notification() {
  const today = new Date();
  const arrangeToday = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  const { noticeToday, noticePast } = notificationdata.reduce(
    (acc, notice) => {
      if (notice.date === arrangeToday) {
        acc.noticeToday.push(notice);
      } else {
        acc.noticePast.push(notice);
      }
      return acc;
    },
    { noticeToday: [] as any, noticePast: [] as any }
  );

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <ns.NotificationBox>
          <ns.NotificationTitleBox>
            <ns.NotificationTitle>오늘</ns.NotificationTitle>
          </ns.NotificationTitleBox>
          {noticeToday?.map((notice: any) => (
            <ns.NotificationMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </ns.NotificationMsg>
          ))}
        </ns.NotificationBox>
        <ns.NotificationBox>
          <ns.NotificationTitleBox>
            <ns.NotificationTitle>지난 알림</ns.NotificationTitle>
            <ns.DeleteBtn>
              <AiFillDelete size='24' />
            </ns.DeleteBtn>
          </ns.NotificationTitleBox>
          {noticePast?.map((notice: any) => (
            <ns.NotificationMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </ns.NotificationMsg>
          ))}
        </ns.NotificationBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Notification;
