import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SD = [
    { id: 1, name: "남씨", link: "/a" },
    { id: 2, name: "아스트로", link: "/a" },
    { id: 3, name: "해달선", link: "/a" },
    { id: 4, name: "원어스", link: "/a" },
    { id: 5, name: "손오천", link: "/a" },
    { id: 6, name: "스테이씨", link: "/a" },
    { id: 7, name: "풍월량", link: "/a" },
    { id: 8, name: "디앤씨웹툰스토어", link: "/a" },
    { id: 9, name: "이상한 변호사 우영우", link: "/a" }
]

const AutoSlide = () => {

    const setting = {
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <div className='first_sd'>
            <Slider {...setting} >
                {
                    SD.map(sd => {
                        return (
                            <div className="box">
                                <figure className='pf'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/pf1_" + sd.id + ".jpg"} alt="" />
                                </figure>
                                <p className='nm'>{sd.name}</p>
                            </div>
                        )
                    })

                }

            </Slider>
        </div>
    )
}

export default AutoSlide; 