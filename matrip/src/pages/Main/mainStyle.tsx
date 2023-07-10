import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainBoxHeader = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const SearchWriteBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

export const SearchInput = styled.input`
  width: 90%;
  margin-right: 10px;
  height: 40px;
  border-radius: 40px;
  padding: 0 20px;
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const WriteBtn = styled.button`
  background: none;
  border-radius: 40px;
  height: 40px;
  padding: 0 24px;
  cursor: pointer;
`;

export const locationContainer = styled.div`
  display: flex;
`;

export const locationBox = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const marginzeroP = styled.p`
  margin: 0;
`;

export const postContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

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
  color: #000;
  text-decoration: none;
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

export const LikeBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 10px;
`;
