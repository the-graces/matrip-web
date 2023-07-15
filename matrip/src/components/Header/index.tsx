import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsArrowLeft, BsArrowLeftShort } from 'react-icons/bs';

// type LocationType = 'notifications' | 'map' | 'friends';

// const locationTitle: Record<LocationType, string> = {
//   notifications: '알림',
//   map: '위치 찾기',
//   friends: '친구 '
// };

const getTitle = (location: string) => {
  let title = '';
  if (location === 'notifications') {
    title = '알림';
  } else if (location === 'map') {
    title = '지도';
  } else if (location === 'friends') {
    title = '친구';
  } else if (location === 'login') {
    title = '로그인';
  } else if (location === 'signup') {
    title = '회원가입';
  } else {
    title = '';
  }

  return title;
};

function Header() {
  const navigate = useNavigate();
  const page = useLocation().pathname.substring(1);

  return (
    <NavContainer>
      <NavWrap>
        <BackBtn onClick={() => navigate(-1)}>
          <BsArrowLeftShort size='24' />
        </BackBtn>
        <NavTitle>{getTitle(page)}</NavTitle>
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: solid #dcdcdc 1px;
`;

const NavWrap = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

const NavTitle = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

const BackBtn = styled.button`
  border: none;
  background: none;
  padding: 0;
`;

export default Header;
