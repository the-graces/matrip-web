import React, { useState } from 'react';
import * as fsc from './memberSearchStyle';
import * as gs from '../../styles/GlobalStyles';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { fdata } from '../../data/userdata';
import Header from '../../components/Header';
import UserBox from './MemberBox';

const MemberSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredFdata = fdata.filter((data: any) =>
    data.nick.includes(searchInput)
  );

  const getValue = (e: any) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    // setSearchInput(input);
  };

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <fsc.SearchInputBox>
          <fsc.SearchInput
            type='search'
            placeholder='이름, 친구 코드'
            id='searchInput'
            value={searchInput}
            onChange={getValue}
          />
          <fsc.SearchBtn
            className='searchIcon'
            type='submit'
            onClick={handleSearch}
          >
            <HiMiniMagnifyingGlass size='24' color='#9C9C9C' />
          </fsc.SearchBtn>
        </fsc.SearchInputBox>
        {!searchInput && (
          <fsc.SearchResultArea>
            {filteredFdata.length === 0 ? (
              <p>올바른 닉네임을 입력해주세요!</p>
            ) : (
              filteredFdata.map((friend, index) => (
                <UserBox
                  key={index}
                  imgUrl={friend.imgurl}
                  nick={friend.nick}
                  code={friend.id}
                />
              ))
            )}
          </fsc.SearchResultArea>
        )}
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default MemberSearch;
