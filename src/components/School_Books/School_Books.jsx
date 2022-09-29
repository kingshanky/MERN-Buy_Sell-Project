import React from 'react'
import './schoolbooks.css';
//  import { Button } from 'react-bootstrap';
import history from './history';


export default function School_Books() {
    return (
        <div>
            <br />
            <div className="Heading2">
                <h1 ><u> List of Books  </u> </h1>
            </div>
            <br />
            <br />

            <div id="cards_landscape_wrap-2">
                <div className="container  ">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}

                                            <img src="Images/Study2.jpg" alt="" />

                                        </div>
                                        <div className="text-container  Color">
                                            <h6 >class-12th Books CBSE</h6>

                                            <p>Book is in good condition and 2020 Edition</p>
                                            <br />
                                            <h3> 249 Rs</h3>

                                            <a href="" onClick={() => history.push('/class12book')} className='btn btn-outline-primary rounded-pill px-4    btn1'>Buy Now</a>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12  col-sm-6 col-md-3 col-lg-4   box2 ">
                            <a href="">
                                <div className="card-flyer ">
                                    <div className="text-box img1 ">
                                        <div className="image-box ">
                                            {/*        <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />    */}

                                            <img src="Images/Study.jpg" alt="" />
                                        </div>
                                        <div className="text-container   Color">
                                            <h6> UPSC Prepration Books</h6>

                                            <p>Book is in good condition and 2020 Edition</p>
                                            <br />
                                            <h3> 500 Rs</h3>

                                            <a href="" onClick={() => history.push('/UpscBook')} className='btn btn-outline-primary rounded-pill px-4    btn2'>Buy Now</a>


                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box3">
                            <a href="">
                                <div className="card-flyer ">
                                    <div className="text-box img1">
                                        <div className="image-box">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />     */}

                                            <img src="Images/IT.jpg" alt="" />

                                        </div>

                                        <div className="text-container    Color">
                                            <h6>Bank Exam Prepration</h6>

                                            <p>Book is in good condition and 2020 Edition</p>
                                            <br />
                                            <h3> 100 Rs</h3>
                                            <a href="" onClick={() => history.push('/BankExam')} className='btn btn-outline-primary rounded-pill px-4    btn3'>Buy Now</a>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}
