// import React from 'react'
import img1 from '../../assets/img.png';
import img2 from '../../assets/lucide_quote.png';


const Testimonials = () => {
    return (
        <div>
            <div className="container mb-4 text-center mt-5">
                <h6 className=" text-center my-4 feature-head">SUCCESS STORIES</h6>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">

                        <h2 className="display-6 fw-bold">Students Love Aivana</h2>
                        <p>
                            Join thousands of students who have transformed their exam preparation with Aivana
                        </p>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card h-100 shadow-lg testimonial-card border-0">
                            <div className="card-body">
                                <div className='my-3 d-flex justify-content-between'>
                                    <div className='my-3'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <p className="card-text">
                                    “Aivana helped me improve my jamb score
                                    from 220 to 298! The AI explanations made complex topics so easy to understand.”
                                </p>
                                <div className='d-flex align-items-center justify-content-between my-3'>
                                    <div className='d-flex align-items-center'>
                                        <img src={img1} alt="" className='img-fluid me-2' />
                                        <div className='identity'>
                                            <h6 className="card-title">Adaeze Okonkwo</h6>
                                            <p className="card-subtitle text-muted">JAMB Candidate, Lagos</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span className='points px-2 rounded-3 identity1'>+78 points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card h-100 shadow-lg testimonial-card border-0">
                            <div className="card-body">
                                <div className='my-3 d-flex justify-content-between'>
                                    <div className='my-3'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <p className="card-text">
                                    “I was struggling with Mathematics, but the personalized practice and instant feedback helped me gain confidence. Got an AI!.”
                                </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <img src={img1} alt="" className='img-fluid me-2' />
                                        <div className='identity'>
                                            <h6 className="card-title">Emeka Nwachukwu</h6>
                                            <p className="card-subtitle text-muted">WAEC Students, Enugu</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span className='points px-2 rounded-3 identity1'>A1 in Maths</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card h-100 shadow-lg testimonial-card border-0">
                            <div className="card-body">
                                <div className='my-3 d-flex justify-content-between'>
                                    <div className='my-3'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <p className="card-text">
                                    “The offline feature is a game-changer! I can study even when there’s no network. My parent are so impressed with my progress.”
                                </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center identity'>
                                        <img src={img1} alt="" className='img-fluid me-2' />
                                        <div>
                                            <h6 className="card-title">Fatima Ibrahim</h6>
                                            <p className="card-subtitle text-muted">NECO Candidates, Kano</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span className='points px-2 rounded-3 identity1'>5 A’s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials