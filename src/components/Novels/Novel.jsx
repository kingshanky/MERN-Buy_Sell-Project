import React from 'react';
import './novel.css';
//  import { Button } from 'react-bootstrap';
import history from './history';



const Novel = () => {



    return (
        <div >
            <br />
            <div className="Heading3">
                <h1 >  <u> List of Novels </u> </h1>
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

                                            <img src="Images/Study.jpg" alt="" />

                                        </div>
                                        <div className="text-container  Color">
                                            <h6 >Harry Porter </h6>
                                            <p > Good  Novel with all pages and in good condition. </p>
                                            <br />
                                            <h4> 500 Rs </h4>
                                            <a href="" onClick={() => history.push('/Novel_Harry')} className='btn btn-outline-primary rounded-pill px-4    btn1'>Buy Now</a>

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

                                            <img src="Images/Study2.jpg" alt="" />
                                        </div>
                                        <div className="text-container   Color">
                                            <h6>Half Girl Friend </h6>
                                            <p> Good Novel with all pages and in good condition. </p>
                                            <br />
                                            <h4> 700 Rs </h4>

                                            <a href="" onClick={() => history.push('/halfgirlfriend')} className='btn btn-outline-primary rounded-pill px-4    btn2'>Buy Now</a>


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
                                            <h6>Wings of fire</h6>
                                            <p>  Good Novel with all pages and in good condition. </p>
                                            <br />
                                            <h4> 100 Rs </h4>
                                            <a href="" onClick={() => history.push('/wingsofFire')} className='btn btn-outline-primary rounded-pill px-4    btn3'>Buy Now</a>

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

export default Novel;