import { styled } from "styled-components";

export const MainContainer = styled.div`  
  
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const SearchInput = styled.input`
    width: 90%;
    height: 40px;
    padding-left: 10px;
    border-radius: 40px;
    border:  1px solid transparent; 
    outline: none;
    box-sizing: border-box; // border 두께를 크기 계산에 포함

    background-color: #F0F0F0;

    &:focus {
    border: 1px solid #000;
  }
`
export const SearchResultArea = styled.div`
    width: 90%;
    background-color: #fff;
`

export const SearchResultItem = styled.div`
    width: 90%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 40px;
    /* border-radius: 40px; */
    margin: 10px 0px;

    border-bottom: 1px solid grey;
    padding-inline: 5%;
`

export const SearchResultLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const SearchResultImgCtnr = styled.div`
    width: 40px;
    height: 40px;
`

export const SearchResultImg = styled.img`
    width:100%;
    height:100%; 
    border-radius:100%;
`

export const SearchResultNickname = styled.div`
    font-size: 23px;
    margin-left: 10px;
`

export const SearchResultRight = styled.div`
    
`

export const SearchResultId = styled.div`
    
`


