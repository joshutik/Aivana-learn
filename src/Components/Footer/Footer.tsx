// import React from 'react'
import img1 from '../../assets/logo.png';
import img2 from '../../assets/twitter.png';
import img3 from '../../assets/instagram.png';
import img4 from '../../assets/Linkedin.png';
import img5 from '../../assets/youtube.png';

const Footer = () => {
    return (
        <div className='py-5'>
            <footer className="footer bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row mt-5">

                        <div className="col-md-5 col-sm-12 mb-4 mb-sm-4">
                            <div className='d-flex'>
                                <img src={img1} alt="" className='img-fluid me-3' />
                                <h5>Aivana</h5>
                            </div>
                            <p className="mt-3">
                                Smart AI Tutor for Exam Prep - Built For Every African
                                Student Turning every phone into a world-class
                                tutor
                            </p>
                            <div className=''>
                                <a href=""><img src={img2} alt="" className='me-2' /></a>
                                <a href=""><img src={img3} alt="" className='me-2' /></a>
                                <a href=""><img src={img4} alt="" className='me-2' /></a>
                                <a href=""><img src={img5} alt="" className='me-2' /></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 ms-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Product</h5>
                                    <ul className="list-unstyled">
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Features </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Pricing  </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Subjects </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Exams </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Download App </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5>Company</h5>
                                    <ul className="list-unstyled">
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> About Us </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Careers </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Blog </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Press </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5>Support</h5>
                                    <ul className="list-unstyled">
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Help Center </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Contact Us </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Privacy Policy </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Terms of Services </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5>Resources</h5>
                                    <ul className="list-unstyled">
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Study Tips </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Exams Calender </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> Success Stories </a></li>
                                        <li className='my-3'><a href="" className='text-decoration-none text-light'> For Schools </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-4'/>
                    <div className="d-flex align-items-center justify-content-between mt-4 flex-column flex-md-row">
                        <p className="text-center">© 2024 Aivana. All rights reserved.</p>
                        <p>Made with ❤️ for African Student</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer