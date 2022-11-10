import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const SLIDE = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 }
]

const MainVisual = () => {
    const [setIDX] = useState();

    useEffect(() => {
    }, []);

    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        dots: true,
        dotsClass: 'dost-css',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (
        <section className='MainVisual'>
            <div className="sd_inr">
                {/* 메인비주얼 슬라이드 */}
                <div className="slide">
                    <Slider {...setting} ref={mainSlide}>
                        {
                            SLIDE.map(content => {
                                return (
                                    <figure>
                                        <div className="box">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/slide1_" + content.id + ".jpg"} alt="" />
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                    {/* <div className="slideNum">
                        0{IDX + 1}<span> / 0{SLIDE.length}</span>
                    </div>
                    <ul className="slideTab">
                        {
                            SLIDE.map((dots, idx) => {
                                return (
                                    <li key={dots.id} className={idx === IDX ? ' on' : ''}>{dots.content}</li>
                                )
                            })
                        }
                    </ul> */}
                </div>
            </div>
        </section>
    )
}

export default MainVisual;