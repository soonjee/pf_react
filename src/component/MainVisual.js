import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const SLIDE = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7}
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);

    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={slide.id + (idx === IDX ? ' on' : '')}>
                                <img src={process.env.PUBLIC_URL + "/assets/img/slide01.jpg"} alt="" />
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideNum">
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
            </ul>
        </section>
    )
}

export default MainVisual;