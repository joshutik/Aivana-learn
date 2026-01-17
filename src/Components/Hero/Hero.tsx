// import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="hero-section d-flex align-items-center">


                <div className="container mt-5">
                    <div className="row align-items-center my-5 justify-content-center">
                        <div className="container text-center mb-4">
                            <span className="border w-50 mx-auto rounded-pill py-1 px-3 prep">Smart AI Tutor for Exam Prep</span>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
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
                            <div className="card p-4 shadow-lg">
                                <p>
                                    How do I  solve quadratic Equation?
                                </p>

                                <span className="score rounded-pill px-3 py-1 mb-2  d-inline-block text-center">
                                    +25 % Score Improvement
                                </span>

                                <p className="equation p-3 rounded">
                                    Sure! Let me break it down step by step. A quadratic
                                    equation has the form ax² + bx + c = 0. We can solve it
                                    using the quadratic formula:
                                    x = (-b ± √(b² - 4ac)) / (2a)
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