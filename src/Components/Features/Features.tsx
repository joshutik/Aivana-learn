// import React from 'react'
import img1 from '../../assets/brain.png';
import img2 from '../../assets/chat.png';
import img3 from '../../assets/search.png';
import img4 from '../../assets/chart.png';
import img5 from '../../assets/pad.png';
import img6 from '../../assets/wifi.png';

const Features = () => {
    return (
        <div>
            <section className="features-section d-flex align-items-center">
                <div className="container mt-5">
                    <div className="container mb-4 text-center">
                        <h6 className=" text-center my-4 feature-head">FEATURES</h6>
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8 col-sm-12">

                                <h2 className="display-6 fw-bold">Everything You Need To Succeed</h2>
                                <p>
                                    Aivana combines AI intelligence with proven learning methods to give you the best chance at
                                    exam success
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row align-items-center my-5 justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                <img src={img1} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">Personalized Learning</h5>
                                    <p className="card-text">
                                        Student struggle to get
                                        individual attention in class of
                                        50+ students
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                    <img src={img2} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">AI-Powered Explanantion</h5>
                                    <p className="card-text">
                                        Poor-quality textbooks and
                                        learning resources that don’t
                                        match exam standard
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                <img src={img3} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">Exam-Standard Practice</h5>
                                    <p className="card-text">
                                        Teaching approaches that ingore
                                        each student’s unique learning
                                        pace
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                <img src={img4} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">Smart Analytics</h5>
                                    <p className="card-text">
                                        Low confidence anf fear of
                                        failure due to poor preperation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                <img src={img5} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">Gamified Learning</h5>
                                    <p className="card-text">
                                        Earn XP, maintain streaks, unlock badges, and compete on leaderboards, Learning made fun!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-3">
                            <div className="card h-100 shadow-lg feature-card">
                                <div className="card-body">
                                <img src={img6} alt="" className='img-fluid my-3' />
                                    <h5 className="card-title">Work Offline</h5>
                                    <p className="card-text">
                                        Download lessons and practice anywhere. Perfect for areas with limited connectivity
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features