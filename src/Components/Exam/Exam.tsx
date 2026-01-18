import img1 from '../../assets/Jamb.png';
import img2 from '../../assets/Neco.png';
import img3 from '../../assets/GCE.png';
import img4 from '../../assets/IJMB.png';


const Exam = () => {
    return (
        <div>
            <section className="features-section d-flex align-items-center">
                <div className="container mt-5">
                    <div className="container mb-4 text-center">
                        <h6 className=" text-center my-4 feature-head">EXAM COVERAGE</h6>
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8 col-sm-12">

                                <h2 className="display-6 fw-bold">Prepared for Every Major African
                                    Exam</h2>
                                <p>
                                    Our content is specifically designed and updated to match the latest exam pattern and syllabi
                                </p>
                            </div>
                        </div>

                        <div className="row align-items-center my-5 justify-content-center">
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="card mb-4 shadow-lg d-flex flex-row align-items-center p-0 exam-card border-primary">
                                    <div className="ps-3">
                                        <img src={img1} alt="" className='img-fluid' />
                                    </div>
                                    <div className="card-body text-start mt-3">
                                        <p className='mb-0'>Joint Admission & Examination Board</p>
                                        <p className='avialable'><i className="bi bi-check2"></i> Available Now</p>
                                    </div>
                                </div>
                                <div className="card mb-4 shadow-lg d-flex flex-row align-items-center p-0 exam-card border-primary">
                                    <div className="ps-3">
                                        <img src={img1} alt="" className='img-fluid' />
                                    </div>
                                    <div className="card-body text-start mt-3">
                                        <p className='mb-0'>Joint Admission & Examination Board</p>
                                        <p className='avialable'><i className="bi bi-check2"></i> Available Now</p>
                                    </div>
                                </div>
                                <div className="card mb-4 shadow-lg d-flex flex-row align-items-center p-0 exam-card">
                                    <div className="ps-3">
                                        <img src={img2} alt="" className='img-fluid' />
                                    </div>
                                    <div className="card-body text-start mt-3">
                                        <p className='mb-0 text-secondary'>National Examination Council</p>
                                        <p className='text-secondary'>Coming Soon</p>
                                    </div>
                                </div>
                                <div className="card mb-4 shadow-lg d-flex flex-row align-items-center p-0 exam-card">
                                    <div className="ps-3">
                                        <img src={img3} alt="" className='img-fluid' />
                                    </div>
                                    <div className="card-body text-start mt-3">
                                        <p className='mb-0 text-secondary'>General Certificate Examination</p>
                                        <p className='text-secondary'>Coming Soon</p>
                                    </div>
                                </div>
                                <div className="card mb-4 shadow-lg d-flex flex-row align-items-center p-0 exam-card">
                                    <div className="ps-3">
                                        <img src={img4} alt="" className='img-fluid' />
                                    </div>
                                    <div className="card-body text-start mt-3">
                                        <p className='mb-0 text-secondary'>Interim Joint Matriculation Board</p>
                                        <p className='text-secondary'>Coming Soon</p>
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-6 col-md-5 col-sm-12 ms-4">
                                <div className="card rounded-5 mb-4 shadow-lg text-start p-0 exam-card ">
                                    <div className="card-body">
                                        <h4 className='text-start mt-3 fw-bold'>Subject Covered</h4>
                                    </div>
                                    <ul className=" text-start d-flex flex-row w-100 mt-0">
                                        <div>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Mathematics</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Biology</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Chemistry</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Government</li>
                                        </div>

                                        <div className='ms-5'>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> English Language</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Physics</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Economics</li>
                                            <li className="list-group-item mt-3"><i className="bi bi-check-circle"></i> Literature</li>
                                        </div>
                                    </ul>
                                    <div className="d-flex flex-row text-center justify-content-between g-3 p-3">
                                        <div className='me-3'>
                                            <h3 className='practise text-primary fw-bold'>10K+</h3>
                                            <p className='fs-6'>
                                                Practice Question
                                            </p>
                                        </div>
                                        <div className='me-3'>
                                            <h3 className='years text-success fw-bold'>15+</h3>
                                            <p className='fs-6'>
                                                Years of Past Question
                                            </p>
                                        </div>
                                        <div className='me-3'>
                                            <h3 className='syllable text-warning fw-bold'>100%</h3>
                                            <p className='fs-6'>
                                                Syllabus Coverage
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container numbers rounded-4">
                    <div className="row align-items-center justify-content-center py-4 text-center text-light">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='me-3'>
                                <h3 className='practise fw-bold'>50K+</h3>
                                <p className='fs-6'>
                                    Active Students
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='me-3'>
                                <h3 className='years  fw-bold'>25%</h3>
                                <p className='fs-6'>
                                    Avg. Score Improvement
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='me-3'>
                                <h3 className='syllable fw-bold'>4.8</h3>
                                <p className='fs-6'>
                                    App Store Rating
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='me-3'>
                                <h3 className='syllable fw-bold'>1M+</h3>
                                <p className='fs-6'>
                                    Questions Answered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}
export default Exam