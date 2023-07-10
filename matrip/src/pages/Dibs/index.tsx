import React from 'react';
import { GoHeart } from 'react-icons/go';
import * as gs from '../../styles/GlobalStyles';
import * as ds from './dibsStyle';
import { dibsdata } from '../../data/dibsdata';

function Dibs() {
  return (
    <gs.MainContainer>
      <gs.MainBox>
        {dibsdata.map((dibs) => (
          <ds.DibsBox key={dibs.id}>
            <ds.infoBox>
              <ds.Desination>{dibs.destination}</ds.Desination>
              <ds.Period>
                {dibs.startDate}-{dibs.endDate}
              </ds.Period>
              <ds.ProfileList>
                <ds.ProfileBox>
                  <ds.Profile src={dibs.imgurl} alt='유저 프로필' />
                </ds.ProfileBox>
              </ds.ProfileList>
            </ds.infoBox>
            <div>
              <ds.DibsBtn>
                <GoHeart size='24' />
              </ds.DibsBtn>
            </div>
          </ds.DibsBox>
        ))}
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Dibs;
