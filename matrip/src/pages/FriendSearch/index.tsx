import React from 'react'
import * as fsc from './friendSearchStyle'
import { SearchResultNickname } from '../FriendSearch/friendSearchStyle';

const FriendSearch: React.FC = () => {

    const fdata = [
        {
          nick: 'yong',
          id: 'yong12',
          imgurl:
            'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202302/21/spotvnews/20230221133133423kfxy.jpg',
        },
        {
          nick: 'min',
          id: 'min33',
          imgurl:
            'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202302/21/spotvnews/20230221133133423kfxy.jpg',
        },
        {
          nick: 'seo',
          id: 'seo7',
          imgurl:
            'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202302/21/spotvnews/20230221133133423kfxy.jpg',
        },
      ]

    


  return (
    <fsc.MainContainer>
        friendSearch
        <fsc.SearchInput />
        <fsc.SearchResultArea>

        {/* response data map으로 뿌려주기 */}
        {fdata.map((friend, index) => (
            <fsc.SearchResultItem key={index}>
                <fsc.SearchResultLeft>
                    <fsc.SearchResultImgCtnr>
                        <fsc.SearchResultImg 
                            src={friend.imgurl}
                        /> 
                    </fsc.SearchResultImgCtnr>
                    <fsc.SearchResultNickname>{friend.nick}</fsc.SearchResultNickname>
                </fsc.SearchResultLeft>
                <fsc.SearchResultRight>
                    <fsc.SearchResultId>{friend.id}</fsc.SearchResultId>
                </fsc.SearchResultRight>
            </fsc.SearchResultItem>
        ))
        }

        </fsc.SearchResultArea>
    </fsc.MainContainer>
  )
}

export default FriendSearch