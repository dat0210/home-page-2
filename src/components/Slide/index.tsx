// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slide = () => {
  return (
    <Swiper
        // install Swiper modules
        modules={[ Pagination ]}
        pagination={{ clickable: false }}
        slidesPerView={1}
    >
        <SwiperSlide>
            <img src="public/images/slide1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/images/slide2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="public/images/slide3.webp" alt="" />
        </SwiperSlide>
    </Swiper>
  )
}

export default Slide