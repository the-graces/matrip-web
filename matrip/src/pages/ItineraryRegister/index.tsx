import React from "react"
import styled from "styled-components";
import {MdOutlineMan4} from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai";
import "./index.scss"



const ItineraryRegister: React.FC = () => {
  return (
    <>
        <MainContainer>
            ItineraryRegister
            <InfoCtnr>
                <LabelText>기간</LabelText>
                <TimePickerCtnr>
                    <TimePicker>2023.07.07 19:00</TimePicker>
                    <TimePicker>2023.07.09 09:00</TimePicker>
                </TimePickerCtnr>
            </InfoCtnr>
            <InfoCtnr>
                <LabelText>위치</LabelText>
                <LocationPickerCtnr>
                    <LocationPicker>강원도 강릉시 강릉시 옥천동</LocationPicker>
                </LocationPickerCtnr>
            </InfoCtnr>
            <InfoCtnr>
                <LabelText>오픈채팅 링크</LabelText>
                <ChatLinkCtnr>
                    <ChatLink>
                        <a href="https://velog.io">
                            https://velog.io
                        </a>
                    </ChatLink>
                </ChatLinkCtnr>
            </InfoCtnr>
            <InfoCtnr>
                <LabelText>소개</LabelText>
                <IntroduceItineraryCtnr>
                    <IntroduceItinerary>안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?안녕하세요?</IntroduceItinerary>
                </IntroduceItineraryCtnr>
            </InfoCtnr>
            <InfoCtnr>
                <LabelText>동행</LabelText>
                <CompanionCtnr>
                    <CompanionMember>
                        <MdOutlineMan4 className="companionIcon"/>
                    </CompanionMember>
                    <CompanionMember>
                        <MdOutlineMan4 className="companionIcon"/>
                    </CompanionMember>
                    <CompanionAdd>
                        <AiOutlineUserAdd className="companionIcon"/>
                    </CompanionAdd>
                </CompanionCtnr>
            </InfoCtnr>
            <RegisterSubmitBtn>
                등록
            </RegisterSubmitBtn>
        </MainContainer>
    </>
  )
}

export default ItineraryRegister;

const MainContainer = styled.div`  
  

  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;


const InfoCtnr = styled.div`
    
    width: 100%;
    margin: 15px 0px;

    display: flex;
    flex-direction: column;
    
`

const LabelText = styled.div`
    margin: 0px 0px 7px 15px;
    font-weight: 600;
`

const TimePickerCtnr = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TimePicker = styled.div`
    background-color: #F0F0F0;
    width: 35%;
    height: 40px;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const LocationPickerCtnr = styled.div`
    
`

const LocationPicker = styled.div`
    height: 40px;
    border-radius: 40px;
    padding-left: 13px;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
`

const ChatLinkCtnr = styled.div`
    
`
const ChatLink = styled.div`
    background-color: #F0F0F0;
    height: 40px;
    border-radius: 40px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    
`

const IntroduceItineraryCtnr = styled.div`
    
`

const IntroduceItinerary = styled.div`
    background-color: #F0F0F0;
    padding: 15px;
`

const CompanionCtnr = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CompanionMember = styled.div`
    width: 50%;
    

    display: flex;
    align-items: center;
    justify-content: center;
`

const CompanionAdd = styled.div`
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterSubmitBtn = styled.button`
    width: 100%;
    height: 40px;
`