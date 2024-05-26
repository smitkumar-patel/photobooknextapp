"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const img = [
    "/images/slider/TrueHDPhotobooks/JT8A5107_2.jpg",
    "/images/slider/TrueHDPhotobooks/JT8A5088_2.jpg",
    "/images/slider/TrueHDPhotobooks/JT8A5077_2.jpg",
    "/images/slider/TrueHDPhotobooks/JT8A4919.jpg",
    "/images/slider/TrueHDPhotobooks/JT8A4923.jpg",
]

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                autoplay={{
                    delay: 3000
                }}
                slidesPerView={1}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                breakpoints={{
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map((imgs, i) => <SwiperSlide><img class="d-block order-lg-2 me-auto me-lg-0 ms-auto" src={imgs} key={i} width="750" alt="Image" /></SwiperSlide>)}
            </Swiper >
        </>
    )
}

export default Slider