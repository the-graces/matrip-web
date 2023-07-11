import React, { useState } from 'react';
import * as fsc from './friendSearchStyle';
import * as gs from '../../styles/GlobalStyles';
import { fdata } from '../../data/userdata';

const FriendSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredFdata = fdata.filter((data: any) =>
    data.nick.includes(searchInput)
  );

  // 입력값을 가져와서 소문자로 변환
  const getValue = (e: any) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <fsc.SearchInput
          type='search'
          placeholder='검색어를 입력해주세요.'
          id='searchInput'
          value={searchInput}
          onChange={getValue}
        />
        {searchInput && (
          <fsc.SearchResultArea>
            {filteredFdata.length === 0 ? (
              <p>올바른 닉네임을 입력해주세요!</p>
            ) : (
              filteredFdata.map((friend, index) => (
                <fsc.SearchResultItem key={index}>
                  <fsc.SearchResultLeft>
                    <fsc.SearchResultImgCtnr>
                      <fsc.SearchResultImg src={friend.imgurl} />
                    </fsc.SearchResultImgCtnr>
                    <fsc.SearchResultNickname>
                      {friend.nick}
                    </fsc.SearchResultNickname>
                  </fsc.SearchResultLeft>
                  <fsc.SearchResultRight>
                    <fsc.SearchResultId>{friend.id}</fsc.SearchResultId>
                  </fsc.SearchResultRight>
                </fsc.SearchResultItem>
              ))
            )}
          </fsc.SearchResultArea>
        )}
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default FriendSearch;
