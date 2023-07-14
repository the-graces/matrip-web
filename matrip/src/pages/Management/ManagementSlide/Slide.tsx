import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import * as ss from './SlideStyle';
import { fdata } from '../../../data/userdata';
// import { Pagination } from 'swiper';

const Slide: React.FC = () => {
  return (
    <>
      <ss.StyledWrapper>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={40}
          grabCursor={true}
          pagination={{
            clickable: true
          }}
          className='mySwiper'
        >
          {fdata.map((x: any) => {
            return (
              <SwiperSlide key={x.id}>
                <ss.SlidefileImgBox>
                  <ss.SlideImg src={x.imgurl} alt='유저 프로필' />
                </ss.SlidefileImgBox>
                <ss.ProFile>
                  <ss.ProFileNick>{x.nick}</ss.ProFileNick>
                  <ss.ProFileSex>{x.sex}</ss.ProFileSex>
                </ss.ProFile>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ss.StyledWrapper>
    </>
  );
};
export default Slide;
