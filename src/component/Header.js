import { useState } from 'react';

const NAVLINK = [
    { id: 1, menu: "CREATOR", link: '/' },
    { id: 2, menu: "BRAND", link: '/' },
    { id: 3, menu: "ARTIST", link: '/' },
    { id: 4, menu: "PRODUCT", link: '/' },
    { id: 5, menu: "CONTENTS", link: '/' },
]

const Header = () => {
    const [TG, setTG] = useState([false, false]);
    //const [TS, setTS] = useState(false);
    return (
        <header className="Header">
            <div className="hd_wrap">
                {/* 헤더 Top */}
                <div className="top_service">
                    <h1 className='hd_logo'>
                        <a href="/" >
                            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
                        </a>
                    </h1>
                    <div className='top_right_s'>
                        <ul className="project">
                            <li>
                                <a href="#!">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/ico_login.png"} alt="" />LOGIN
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/ico_cs.png"} alt="" />CUSTOMER SERVICE
                                </a>
                            </li>
                            {/* Lang박스 */}
                            <div className={'lang ' + (TG[0] ? 'on' : '')}>
                                <strong onClick={() => setTG([!TG[0], false])}>KOR <i className="xi-angle-down arrow"></i></strong>
                                <ul className="lang_box">
                                    {/* <li><a href="#!">KOR</a></li> */}
                                    <li><a href="#!">ENG</a></li>
                                    <li><a href="#!">CHN</a></li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                </div>

                <div className='btm_service'>
                    {/* gnb */}
                    <nav className="Gnb inner">
                        <ul>
                            <i className='xi-bars'></i>
                            {
                                NAVLINK.map((it, idx) => {
                                    return (
                                        <li key={it.id}>
                                            <a href={it.link}>{it.menu}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className='btm_right_s'>
                        {/* 서치 bar */}
                        <div className={`btm_search ` + (TG[1] ? 'on' : '')}>
                            <strong onClick={() => setTG([false, !TG[1]])}></strong>
                            <div className="search_box">
                                <form action="#!">
                                    <input type="text" placeholder="귀여운 고양이 굿즈 기획전!" required />
                                    <a href=""> <i className="xi-search"></i></a>
                                </form>
                            </div>
                        </div>
                        {/* 입점신청 */}
                        <div className='btm_opstore'>
                            <a href=""><p> 입점신청</p></a>
                        </div>
                        {/* join 3종 */}
                        <div className='btm_join'>
                            <a href="">
                                <ul>
                                    <li>
                                        <a href="#!"><img src={process.env.PUBLIC_URL + "/assets/img/icon01.png"} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#!"><img src={process.env.PUBLIC_URL + "/assets/img/icon02.png"} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#!"><img src={process.env.PUBLIC_URL + "/assets/img/icon03.png"} alt="" /></a>
                                    </li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;