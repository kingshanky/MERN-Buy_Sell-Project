import React from 'react'
import './sell_book.css';
//  import { Button } from 'react-bootstrap';
import history from './history';



const Sell_Books = () => {
    return (

        <div >

            <br />
            <div className=" Heading ">
                <h1><u> Types of Books you want to Sell </u></h1>
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
                                            <h6 >Sell Aptitude Prepration Books</h6>
                                            <p > Any type of aptitude Books. Remember one thing. Your books should be in good condition.   </p>

                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn1'> Sell Now </a>

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
                                            <h6>Sell Goverment Job Prepration Books </h6>
                                            <p> Any type of aptitude Books. Remember one thing. Your books should be in good condition.  </p>


                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn2'>Sell Now</a>


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
                                            <h6>Sell SSB Prepration Books and Hand Written Notes</h6>
                                            <p>  Any type of aptitude Books. Remember one thing. Your books should be in good condition.  </p>

                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn3'>Sell Now</a>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box">
                                            {/*    <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />   */}

                                            <img src="Images/IT3.jpg" alt="" />


                                        </div>
                                        <div className="text-container    Color">
                                            <h6>Sell IT Job Prepration Books</h6>
                                            <p> Any type of aptitude Books. Remember one thing. Your books should be in good condition. </p>

                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn1'>Sell Now</a>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12  col-sm-6 col-md-3 col-lg-4   box2 ">
                            <a href="">
                                <div className="card-flyer ">
                                    <div className="text-box img1">
                                        <div className="image-box">
                                            {/*     <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />   */}

                                            <img src="Images/IAS2.jpg" alt="" />

                                        </div>
                                        <div className="text-container   Color">
                                            <h6>Sell Non IT Prepration Books</h6>
                                            <p> Any type of aptitude Books. Remember one thing. Your books should be in good condition. </p>


                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn2'>Sell Now</a>


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
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />    */}

                                            <img src="Images/Img1.jpg" alt="" />

                                        </div>

                                        <div className="text-container    Color">
                                            <h6>Sell Novels and Hand Written Notes </h6>
                                            <p> Any type of aptitude Books. Remember one thing. Your books should be in good condition.</p>

                                            <a href="" onClick={() => history.push('/Bookdetails')} className='btn btn-outline-primary rounded-pill px-4    btn3'>Sell Now</a>

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

export default Sell_Books;
