const CBA = [
    {id:1, },
    {id:2, },
    {id:3, }
]

const Produce = () => {
    return (
        <section className="sc">
                <div className="banner">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/assets/img/banner01.jpg"} alt="" />
                    </figure>
                </div>
                <div className="cba_box">
                    {
                        CBA.map(cba => {
                            return (
                                
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/cba01_" + cba.id + ".png"} alt="" />
                                    </figure>
                            )
                        })
                    }
                </div>
                
        </section>
    )
}

export default Produce;