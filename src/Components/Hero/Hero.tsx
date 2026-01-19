// import React from 'react'
import img1 from '../../assets/star1.png';
// import img2 from '../../assets/logo.png';
// import img3 from '../../assets/fire.png';
// import img4 from '../../assets/12.png';
import img5 from '../../assets/hero_bg.png';

const Hero = () => {
    return (
        <div className="hero-div mt-5 pt-5">
            <section className="hero-section d-flex align-items-center">
                <div className="container mt-5">
                    <div className="row align-items-center my-5 justify-content-center">
                        <div className="container text-center mb-4">
                            <span className="border border-primary w-50 mx-auto rounded-pill py-2 px-4 prep">
                                <img src={img1} alt="" className='img-fluid star me-2' />  Smart AI Tutor for Exam Prep</span>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 my-4">
                            <h1 className="display-4 fw-bold mb-4">Ace Your Exams
                                with <span className="text-primary">Africa’s </span>
                                Smartest AI Tutors
                            </h1>
                            <p>
                                Built for every African student. Personalized learning, exams-
                                standard practice, and human-like explanations to help you
                                succeed in WAEC, JAMB, NECO & more.
                            </p>
                            <div className="container">
                                <button className="btn btn-primary">Start Learning Free</button>
                                <button className="btn text-dark">Watch Demo</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={img5} alt="" className='img-fluid'    />
                        </div>

                       
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Hero;