import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 5px;
  width: 100%;
  position: relative;

  .swiper-slide {
    width: 200px;
    height: 400px;
    margin: auto;
    position: relative;
    border-radius: 36px;
    box-shadow: 3px 5px 20px #d4d4d4;
  }

  .swiper,
  swiper-container {
    padding: 20px 0px;
  }
`;

export const SlidefileImgBox = styled.div``;

export const SlideImg = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 36px 36px 0px 0px;
  position: relative;
`;

export const ProFile = styled.div`
  display: flex;
  padding: 5px;
`;

export const ProFileNick = styled.div`
  padding: 10px;
  font-size: 18px;
  
`;

export const ProFileSex = styled.div`
  padding: 10px;
  position: absolute;
  right: 15px;
  font-size: 16px;
`;
