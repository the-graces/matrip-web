import React from 'react';
import * as upc from './userProfileStyle';
import * as gs from '../../styles/GlobalStyles';
import { fdata } from '../../data/userdata';

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

  return (
    <gs.MainContainer>
      <gs.MainBox>
        User Profile
        <upc.ImgCtnr>
          <upc.Img src={prf.imgurl} />
        </upc.ImgCtnr>
        <upc.IdCtnr>
          <upc.IdText>{prf.id}</upc.IdText>
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
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default UserProfile;
