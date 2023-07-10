import React from 'react';
import { HiMapPin, HiMiniMagnifyingGlass } from 'react-icons/hi2';
import Post from './Post';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './mainStyle';

const Main: React.FC = () => {
  return (
    <gs.MainContainer>
      <gs.MainBox>
        <ms.MainBoxHeader>
          <ms.SearchWriteBox>
            <ms.SearchBox>
              <ms.SearchInput
                type='text'
                placeholder='검색어를 입력해주세요.'
              />
              <ms.SearchBtn>
                <HiMiniMagnifyingGlass size='24' />
              </ms.SearchBtn>
            </ms.SearchBox>
            <ms.WriteBtn>글쓰기</ms.WriteBtn>
          </ms.SearchWriteBox>
          <ms.locationContainer>
            <ms.locationBox>
              <HiMapPin size='24' />
              <ms.marginzeroP>서울 마포구 마포대로 122</ms.marginzeroP>
            </ms.locationBox>
          </ms.locationContainer>
        </ms.MainBoxHeader>
        <ms.postContainer>
          <Post />
        </ms.postContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default Main;
