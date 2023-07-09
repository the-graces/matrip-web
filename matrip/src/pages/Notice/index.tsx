import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { noticedata } from "../../data/noticedata";
import * as gs from "../../styles/GlobalStyles";
import * as ns from "./noticeStyle";

type NoticeType = "accept" | "request" | "companion" | "update";

const noticeMsgs: Record<NoticeType, string> = {
  accept: "신청을 수락했습니다!",
  request: "참가 신청했습니다!",
  companion: "동행자로 추가했습니다.",
  update: "여행 정보가 변경되었습니다.",
};

const getMsg = (notice: { type?: NoticeType }) => {
  const msg = noticeMsgs[notice?.type as NoticeType];

  if (msg) {
    return `${msg}`;
  } else {
    return "";
  }
};

function Notice() {
  const today = new Date();
  const arrangeToday = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  const { noticeToday, noticePast } = noticedata.reduce(
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
        <ns.NoticeBox>
          <h3>오늘</h3>
          {noticeToday?.map((notice: any) => (
            <ns.NoticeMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </ns.NoticeMsg>
          ))}
        </ns.NoticeBox>
        <ns.NoticeBox>
          <ns.NoticeTitle>
            <h3>지난 알림</h3>
            <ns.DeleteBtn>
              <AiFillDelete size="24" />
            </ns.DeleteBtn>
          </ns.NoticeTitle>
          {noticePast?.map((notice: any) => (
            <ns.NoticeMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </ns.NoticeMsg>
          ))}
        </ns.NoticeBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Notice;
