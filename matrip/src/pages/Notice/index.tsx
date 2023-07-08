import React from "react";
import { styled } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { noticedata } from "../../data/noticedata";
import * as gs from "../../styles/GlobalStyles";

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
  // 오늘 알림
  const noticeToday = noticedata.filter(
    (notice) => notice.date === arrangeToday
  );
  // 지난 알림
  const noticePast = noticedata.filter(
    (notice) => notice.date !== arrangeToday
  );

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <NoticeBox>
          <h3>오늘</h3>
          {noticeToday.map((notice: any) => (
            <NoticeMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </NoticeMsg>
          ))}
        </NoticeBox>
        <NoticeBox>
          <NoticeTitle>
            <h3>지난 알림</h3>
            <DeleteBtn>
              <AiFillDelete size="24" />
            </DeleteBtn>
          </NoticeTitle>
          {noticePast.map((notice: any) => (
            <NoticeMsg key={notice.id}>
              {notice.nick}님이 {getMsg(notice)}
            </NoticeMsg>
          ))}
        </NoticeBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

const NoticeBox = styled.div`
  width: 100%;
`;

const NoticeMsg = styled.div`
  border: solid #000 1px;
  border-radius: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const NoticeTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default Notice;
