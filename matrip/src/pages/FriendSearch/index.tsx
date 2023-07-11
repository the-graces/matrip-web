import React from 'react';
import * as fsc from './friendSearchStyle';
import * as gs from '../../styles/GlobalStyles';
import { SearchResultNickname } from '../FriendSearch/friendSearchStyle';
import { fdata } from '../../data/userdata';

const FriendSearch: React.FC = () => {
  return (
    <gs.MainContainer>
      <gs.MainBox>
        friendSearch
        <fsc.SearchInput />
        <fsc.SearchResultArea>
          {/* response data map으로 뿌려주기 */}
          {fdata.map((friend, index) => (
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
          ))}
        </fsc.SearchResultArea>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default FriendSearch;
