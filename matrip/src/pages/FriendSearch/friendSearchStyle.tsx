import { styled } from 'styled-components';

export const SearchInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 40px;
  padding-left: 15px;
  border-radius: 40px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box; // border 두께를 크기 계산에 포함

  background-color: #f0f0f0;

  &:focus {
    border: 1px solid #000;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
`;

export const SearchResultArea = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
`;
