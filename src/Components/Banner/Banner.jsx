import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='container'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='swiper_bg_one'>
                        <div className='form_Banner'>
                            <h1>Fresh Vegetables
                                Big discount</h1>
                            <p>Save up to 50% off on your first order</p>
                            <div className='form_input_btn'>
                                <input type="text" placeholder='Your emaill address' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_bg_Two'>
                    <div className='form_Banner'>
                            <h1>Fresh Vegetables
                                Big discount</h1>
                            <p>Save up to 50% off on your first order</p>
                            <div className='form_input_btn'>
                                <input type="text" placeholder='Your emaill address' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_bg_There'>
                    <div className='form_Banner'>
                            <h1>Fresh Vegetables
                                Big discount</h1>
                            <p>Save up to 50% off on your first order</p>
                            <div className='form_input_btn'>
                                <input type="text" placeholder='Your emaill address' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner