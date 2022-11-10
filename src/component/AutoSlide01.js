import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SD = [
    { id: 1, name: "남씨", link: "/a" },
    { id: 2, name: "똘킹", link: "/a" },
    { id: 3, name: "제육남", link: "/a" },
    { id: 4, name: "이상한 변호사 우영우", link: "/a" },
    { id: 5, name: "예랑가랑", link: "/a" },
    { id: 6, name: "주호민", link: "/a" },
    { id: 7, name: "ITZY", link: "/a", singer: true },
    { id: 8, name: "엠드로메다", link: "/a" },
    { id: 9, name: "디앤씨웹툰스토어", link: "/a" } //연예인만 데이터값 따로 받아서 컬러지정하는 방법은 몰까?
]

const AutoSlide01 = () => {
    const setting = {
        arrows: false,
        autoplay: true, //멈춰놓음
        autoplaySpeed: 0,
        //pauseOnHover:false,
        pauseOnFocus: false,
        dots: false,
        speed: 4000,
        centerMode: true,
        variableWidth: true,
        cssEase: "linear",
    }

    return (
        <section className='first_sd'>
            <div className="sd_inr">
                <Slider {...setting} >
                    {
                        SD.map(sd => {
                            return (
                                <div className="box">
                                    <a href='#!'>
                                        <figure className='pf'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/pf1_" + sd.id + ".jpg"} alt="" />
                                        </figure>
                                        <p className='nm'>{sd.name}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default AutoSlide01; 