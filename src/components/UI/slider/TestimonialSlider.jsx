import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';
const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings}>
            <div>
                <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident labore magni,
                    adipisci earum modi fugit odit rem aliquid molestiae eum porro nesciunt quas expedita est.
                    Nesciunt officia modi temporibus!</p>
                <div className=' d-flex align-items-center gap-3 slider__content'>
                    <img src={ava01} alt='img' className='rounded' />
                    <h6>Mitchal March</h6>
                </div>
            </div>

            <div>
                <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident labore magni,
                    adipisci earum modi fugit odit rem aliquid molestiae eum porro nesciunt quas expedita est.
                    Nesciunt officia modi temporibus!</p>
                <div  className=' d-flex align-items-center gap-3 slider__content'>
                    <img src={ava02} alt='img' className='rounded' />
                    <h6>Joe Yaso</h6>
                </div>
            </div>

            <div>
                <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident labore magni,
                    adipisci earum modi fugit odit rem aliquid molestiae eum porro nesciunt quas expedita est.
                    Nesciunt officia modi temporibus!</p>
                <div  className=' d-flex align-items-center gap-3 slider__content'>
                    <img src={ava03} alt='img' className='rounded' />
                    <h6>Steven Crock</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident labore magni,
                    adipisci earum modi fugit odit rem aliquid molestiae eum porro nesciunt quas expedita est.
                    Nesciunt officia modi temporibus!</p>
                <div  className=' d-flex align-items-center gap-3 slider__content'>
                    <img src={ava04} alt='img' className='rounded' />
                    <h6>Yara Hany</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider