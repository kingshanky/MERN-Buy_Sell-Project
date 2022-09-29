import React from 'react'
import './class12book.css';

import history from './history';
import imgs1 from "./img/class12book.jpg";
import imgs2 from "./img/class12book2.jpg";
import imgs3 from "./img/class12book3.jpg";
import imgs4 from "./img/class12book8.jpg";
import imgs5 from "./img/class12book10.jpg";




function class12book() {
    return (

        <div>

            <div>

                <h1 style={{ marginLeft: "550px", padding: "30px", fontWeight: "bold", textDecoration: "underline" }}> Class 12th Books </h1>


                <div className="card-wrapper">
                    <div className="card">
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src={imgs1} alt="shoe image" style={{ width: "570px", height: "550px", marginTop: "0px" }} />
                                    {/*         <img src={imgs2} alt="shoe image" />
                    <img src={imgs3} alt="shoe image" />
                    <img src={imgs4} alt="shoe image" />
                    <img src={imgs5} alt="shoe image" />
         */}
                                </div>
                            </div>
                            <div className="img-select">

                                <div className="img-item">
                                    <a data-id="1">
                                        <img src={imgs2} alt="shoe image" style={{ width: "270px", height: "250px" }} />
                                    </a>
                                </div>
                                <div className="img-item" >
                                    <a href="#" data-id="2">
                                        <img src={imgs3} alt="shoe image" style={{ width: "310px", height: "250px" }} />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="3">
                                        <img src={imgs4} alt="shoe image" style={{ width: "240px", height: "250px" }} />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="4">
                                        <img src={imgs5} alt="shoe image" style={{ width: "240px", height: "250px" }} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="product-content">
                            <h2 className="product-title" style={{ marginLeft: "20px", textDecoration: "underline" }}>Class 12th Books</h2>
                            <a href="#" className="product-link">English</a>
                            <div class="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i classNames="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div>

                            <div className="product-price">
                                <p className="last-price">Old Price: <span>$257.00</span></p>
                                <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
                            </div>

                            <div className="product-detail">
                                <h2 style={{ fontWeight: "bold", textDecoration: "underline" }} >About this Book: </h2>
                                <p style={{ color: "black", fontSize: "large" }}>
                                    NCERT Books for Class 12 Maths are provided here for students to study and prepare for their board exams. Class 12 is a turning point of a student’s life, after which they choose their career or profession. The subjects that the students do in their Class 11 and 12 is also the basis for their career choice or professional course they take up. Hence, all the subjects are equally important to them
                                </p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }} >  Authors: </h5> <p style={{ fontWeight: "bold", fontSize: "large" }}  >A Das Gupta</p>
                                {/*       <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }}   > Genres:</h5>  <p style={{ fontWeight: "bold", fontSize: "large" }} > The novel reflects his struggle, helplessness and success to get the goals of his life</p>     */}
                                <br />
                                <ul >
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Available: <span> Yes </span></li>
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Category: <span> Book </span></li>
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Shipping Area: <span>All over the world</span></li>
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Shipping Fee: <span>Free</span></li>
                                </ul>
                            </div>

                            <div className="purchase-info">

                                {/*
               
                <button type="button" className="btn">
                    Add to Cart <i className="fas fa-shopping-cart"></i>
                </button>
                <button type="button" className="btn">Compare</button>
                */}


                                <a href="" onClick={() => history.push('/Transaction')} className='btn btn-outline-primary rounded-pill px-4    btn3'    >Buy Now</a>


                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>


    )
}

export default class12book