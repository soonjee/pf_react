import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const OD = [
    { id: 1, name: "T1", link: "/a" },
    { id: 2, name: "태연", link: "/a" },
    { id: 3, name: "아스트로", link: "/a" },
    { id: 4, name: "시심이", link: "/a" },
    { id: 5, name: "한동숙", link: "/a" },
    { id: 6, name: "리브 샌드박스", link: "/a" },
    { id: 7, name: "세븐틴", link: "/a" },
    { id: 8, name: "아이유", link: "/a" },
    { id: 9, name: "망상리토끼들", link: "/a" }
]

const AutoSlide02 = () => {
    const setting = {
        arrows:false,
        autoplay:true, //멈춰놓음
        autoplaySpeed:0,
        //pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        speed:4000,
        centerMode: true,
        variableWidth: true,
        cssEase:"linear",
    }

    return (
        <div className='scd_sd'>
            <Slider {...setting} >
                {
                    OD.map(od => {
                        return (
                            <div className="box2">
                                <a href='#!'>
                                    <figure className='pf'>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/pf2_" + od.id + ".jpg"} alt="" />
                                    </figure>
                                    <p className='nm'>{od.name}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default AutoSlide02; 