import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';
import Image1 from '../../assets/images/1.jpg'
import Image2 from '../../assets/images/2.jpg'
import Image3 from '../../assets/images/3.jpg'
import Image4 from '../../assets/images/4.jpg'
import Image5 from '../../assets/images/5.jpg'
import Image6 from '../../assets/images/6.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperComponent() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image1}></img></SwiperSlide>
        <SwiperSlide><img src={Image2}></img></SwiperSlide>
        <SwiperSlide><img src={Image3}></img></SwiperSlide>
        <SwiperSlide><img src={Image4}></img></SwiperSlide>
        <SwiperSlide><img src={Image5}></img></SwiperSlide>
        <SwiperSlide><img src={Image6}></img></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
