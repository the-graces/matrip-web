import { styled } from "styled-components";

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const InfoCtnr = styled.div`
  width: 100%;
  margin: 15px 0px;

  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.div`
  margin: 0px 0px 7px 15px;
  font-weight: 600;
`;

export const TimePickerCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TimePicker = styled.div`
  background-color: #f0f0f0;
  width: 35%;
  height: 40px;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationPickerCtnr = styled.div``;

export const LocationPicker = styled.div`
  height: 40px;
  border-radius: 40px;
  padding-left: 13px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
`;

export const ChatLinkCtnr = styled.div``;
export const ChatLink = styled.div`
  background-color: #f0f0f0;
  height: 40px;
  border-radius: 40px;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

export const IntroduceItineraryCtnr = styled.div``;

export const IntroduceItinerary = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
`;

export const CompanionCtnr = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CompanionMember = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanionAdd = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterSubmitBtn = styled.button`
  width: 100%;
  height: 40px;
`;
