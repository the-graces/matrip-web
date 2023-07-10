import { styled } from 'styled-components';

// 전체 화면 컨테이너
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Pretendard;
`;

// 그 안에 들어갈 내용을 감싸는 컨테이너
export const MainBox = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
