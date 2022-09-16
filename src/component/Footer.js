const SNS = [
    { id: 1, },
    { id: 2, },
    { id: 3, },
    { id: 4, },
]

const Footer = () => {
    return (
        <section className="Footer">
            <div className="ft_inr">
                {/* 푸터 left */}
                <div className="ft_left">
                    <div className="ft_logo">
                        <figure className="ft_f">
                            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
                        </figure>
                    </div>
                    <div className="ft_sns">
                        {
                            SNS.map(sns => {
                                return (
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/ft1_" + sns.id + ".png"} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>

                {/* 푸터 right */}
                <div className="ft_right">
                    <div className="ft_right_top">
                        <div className="ft_list">
                            <dl>
                                <dd><a href="">회사소개</a></dd>
                                <dd><a href="">이용약관</a></dd>
                                <dd><a href="">개인정보처리방침</a></dd>
                                <dd><a href="">이용안내</a></dd>
                                <dd><a href="">입점신청</a></dd>
                                <dd><a href="">제조사 입점신청</a></dd>
                            </dl>
                        </div>
                        <div className="list_btn">
                            <ul>
                                <li><a href="">SANDBOX</a></li>
                                <li><a href="">MTDZ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="ft_right_btm">
                        <div className="ft_address">
                            <address>
                                (주)샌드박스네트워크&nbsp;&nbsp;&nbsp;&nbsp;대표 :이필성 <br />
                                서울특별시 용산구 서빙고로 17 센트럴파크타워 30층 <br />
                                사업자등록번호 :220-88-89136 [사업자번호조회] <br />
                                통신판매업신고번호 :2021-서울용산-0232 <br />
                                개인정보관리자 :이필성
                            </address>
                            <copy>
                                Copyrightⓒ2022 MEMEZ. All Rights Reserved. <br />
                                입점 판매자가 등록한 상품, 거래정보 및 거래에 대하여 <br />
                                (주) 샌드박스 네트워크는 일체의 책임을 지지 않습니다.
                            </copy>
                        </div>
                        <div className="ft_center">
                            <strong className="ct_tit">반품배송지</strong>
                            <p className="ct_des">
                                경기도 광주시 도척면 도척로 376-68<br />
                                엠케이물류 MEMEZ
                            </p>
                            <strong className="ct_tit">CUSTOMER CENTER</strong>
                            <p className="ct_num">1533-0652</p>
                            <p className="ct_des">
                                AM 10:00 ~ PM 05:00<br />
                                Off-time PM 01:00 ~ PM 02:00<br />
                                SATURDAY. SUNDAY, HOLIDAY OFF<br />
                                cs@memez.kr
                            </p>
                            <ul className="ct_btn">
                                <li><a href="">Q&amp;A</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;