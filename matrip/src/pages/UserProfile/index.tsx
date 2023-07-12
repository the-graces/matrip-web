import React, { useState, MouseEvent, MouseEventHandler} from 'react';
import * as upc from './userProfileStyle';
import * as gs from '../../styles/GlobalStyles';
import { fdata } from '../../data/userdata';

import UploadImg from '../../components/UploadImg';
import { InfoCtnr } from '../ItineraryInfo/itineraryInfoStyle';

import { useIconClickHandler } from '../../hooks/useIconClickHandler';

import {AiFillEdit} from 'react-icons/ai'

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
  const [pickedImg, setPickedImg] = useState<string>('')

  const [openCropImage, setOpenCropImage] = useState<boolean>(false);

  const handleOpenCropImage = useIconClickHandler(() => {
    setOpenCropImage(true)
  })

  const handleImageUrlFromCrop = (urlFromChild: string) => {
    setPickedImg(urlFromChild);
  };

  if(!pickedImg){
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
        
          <upc.ImgCtnr>
            <upc.Img src={pickedImg} />
          </upc.ImgCtnr>

          <upc.InfoCtnr>
            <upc.IdCtnr>
              <upc.IdText>{prf.id}</upc.IdText>
              <AiFillEdit onClick={handleOpenCropImage}/>
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

      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default UserProfile;
