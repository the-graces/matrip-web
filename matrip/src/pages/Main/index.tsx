import React, { useState } from 'react';
import { HiMapPin, HiMiniMagnifyingGlass } from 'react-icons/hi2';
import Post from '../../components/Post';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './mainStyle';

const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  // 입력값을 가져와서 소문자로변경
  const getValue = (e: any) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <ms.MainBoxHeader>
          <ms.SearchWriteBox>
            <ms.SearchBox>
              <ms.SearchInput
                type='search'
                placeholder='검색어를 입력해주세요.'
                id='searchInput'
                value={searchInput}
                onChange={getValue}
              />
              <ms.SearchBtn
                className='searchIcon'
                type='button'
              >
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
          <Post searchInput={searchInput} />
        </ms.postContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default Main;
