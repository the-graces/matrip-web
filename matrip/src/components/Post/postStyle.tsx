import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postBox = styled.div`
  width: calc((100% - 20px) / 2);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid #000 1px;
  border-radius: 16px;
`;

export const profileBox = styled(Link)`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const profileImgBox = styled.div`
  width: 50px;
  height: 50px;
`;

export const profileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Nickname = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

export const postContent = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const postTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

export const postPeriod = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
