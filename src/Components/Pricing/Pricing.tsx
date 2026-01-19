import React from 'react'

const Pricing = () => {
    return (
        <div>
            <div className="container mb-4 text-center mt-5">
                <h6 className=" text-center my-4 feature-head">PRICING</h6>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">

                        <h2 className="display-6 fw-bold">Affordable for Every Student</h2>
                        <p>
                            Quality Education shouldn’t break the bank. Choose a plan that work for you.
                        </p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row align-items-center my-5 justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card border-0 h-100 shadow-lg pricing-card text-start pb-5">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Free</h5>
                                <span className='fw-bold fs-3'>₦ 0 <small className='fs-5 fw-normal'>/forever</small> </span>
                                <p>
                                    Start learning with limited daily
                                    access
                                </p>

                                <ul className='text-start w-100  my-4'>
                                    <li className='list-group-item my-3 text-start'><i className="bi avialable bi-check2"></i> 5 practice question per day</li>
                                    <li className='list-group-item my-3 text-start'><i className="bi avialable bi-check2"></i> Basic AI explanation</li>
                                    <li className='list-group-item my-3 text-start'><i className="bi avialable bi-check2"></i> 1 subject access</li>
                                    <li className='list-group-item my-3 text-start'><i className="bi avialable bi-check2"></i> Progress tracking</li>
                                </ul>
                                <div>
                                    <button className="btn btn-dark w-100">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card h-100 shadow-lg pricing-card text-center">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Pro Plan</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-sm-3">
                        <div className="card h-100 shadow-lg pricing-card text-center">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Enterprise Plan</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing