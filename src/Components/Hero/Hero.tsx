// import React from 'react'
import img1 from '../../assets/star1.png';
import img2 from '../../assets/logo.png';
import img3 from '../../assets/fire.png';
import img4 from '../../assets/12.png';

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
                            <div className="card p-4 shadow-lg position-relative rounded-5">
                                <a className="navbar-brand d-flex align-items-center" href="#"><img src={img2} alt="" className='img-fluid me-2' /><span className='text-muted fw-bold'>Aivana AI<br /><span className='fw-light'>Your Personal Tutor</span></span></a>
                                <p className='solve py-2 px-2 rounded mt-3'>
                                    How do I  solve quadratic Equation?
                                </p>

                                <span className="score rounded-pill py-1 text-light w-50 mt-5 text-center position-absolute top-0 start-100 me-5 translate-middle">
                                    +25 % Score Improvement
                                </span>

                                <p className="equation p-3 rounded position-relative w-75 ms-5">
                                    Sure! Let me break it down step by step. A quadratic
                                    equation has the form ax² + bx + c = 0. We can solve it
                                    using the quadratic formula:
                                    x = (-b ± √(b² - 4ac)) / (2a)
                                    <span className='card d-flex p-2 position-absolute top-50 start-0 translate-middle bg-light streak'>
                                        Daily Streak
                                        <span className="card-body">
                                        <img src={img3} className='img-fluid w-25 fire' alt="" />
                                        <img src={img4} className='img-fluid w-25 fire' alt="" />
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Hero