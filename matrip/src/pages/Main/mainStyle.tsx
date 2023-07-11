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
