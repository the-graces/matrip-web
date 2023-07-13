import React, { useState, MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';

import * as upc from './userProfileStyle';
import * as gs from '../../styles/GlobalStyles';


import { fdata } from '../../data/userdata';

import UploadImg from '../../components/UploadImg';
import { InfoCtnr } from '../ItineraryInfo/itineraryInfoStyle';

import { useIconClickHandler } from '../../hooks/useIconClickHandler';

import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';


interface UserInfo {
  nick: string;
  id: string;
  imgurl: string;
  email: string;
  sex: string;
  birth: string;
}

const UserProfile: React.FC = () => {
  const prf: UserInfo = fdata[0];

  const [userInfo, setUserInfo] = useState<UserInfo>(prf);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const [pickedImg, setPickedImg] = useState<string>('');
  const [openCropImage, setOpenCropImage] = useState<boolean>(false);

  console.log(isEditable)

  const handleOpenCropImage = useIconClickHandler(() => {
    setOpenCropImage(true)
  });

  const handleEditUserInfo = useIconClickHandler(() => {
    setIsEditable(!isEditable)
  });

  const handleImageUrlFromCrop = (urlFromChild: string) => {
    setPickedImg(urlFromChild);
  };

  const handleInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof UserInfo
  ) => {
    setUserInfo({ ...userInfo, [fieldName]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('handle submit')
  }



  if (!pickedImg) {
    setPickedImg(prf.imgurl)
  }

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <gs.PageName>
          내 프로필
        </gs.PageName>
        {openCropImage &&
          <UploadImg
            sendimg={handleImageUrlFromCrop}
            close={setOpenCropImage}
          />
        }

        <upc.ProfileCard>

          <upc.ImgCtnr $isEditable={isEditable}>
            <upc.Img src={pickedImg} />
            {!isEditable &&
              <upc.EditImg>
                <BsFillImageFill
                  size={50}
                  color='#fff'
                  onClick={handleOpenCropImage}
                />
              </upc.EditImg>
            }
            {/* <AiFillEdit 
              onClick={handleOpenCropImage}
              style={{position:'absolute', right:'20px', top:'10px'}}  
              size={30}
            /> */}
          </upc.ImgCtnr>

          {/* form */}
          <upc.InfoCtnr $isEditable={isEditable}>
            <upc.IdCtnr>
              <upc.IdText
                type='text'
                value={userInfo.id}
                onChange={(e: any) => handleInfoChange(e, 'id')}
                readOnly={isEditable}
              ></upc.IdText>

              {isEditable ?
                <AiFillEdit
                  onClick={handleEditUserInfo}
                />
                :
                <AiFillCheckCircle
                  onClick={handleEditUserInfo}
                />
              }



            </upc.IdCtnr>
            <upc.EmailCtnr>
              <upc.EmailText>{prf.email}</upc.EmailText>
            </upc.EmailCtnr>
            <upc.BirthCtnr>
              <upc.LabelName>생일</upc.LabelName>
              <upc.BirthText>{prf.birth}</upc.BirthText>
            </upc.BirthCtnr>
            <upc.SexCtnr>
              <upc.LabelName>성별</upc.LabelName>
              <upc.SexText>{prf.sex}</upc.SexText>
            </upc.SexCtnr>
          </upc.InfoCtnr>

        </upc.ProfileCard>
        <upc.ProfileCard>
          <div>친구 목록</div>
          <div>친구 목록</div>
          <div>친구 목록</div>

        </upc.ProfileCard>

      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default UserProfile;
