import React from 'react'
import './upscbook.css';

import history from './history';
import imgs1 from "./img/upsc11.jpg";
import imgs2 from "./img/upsc2.jpg";
import imgs3 from "./img/upsc3.jpg";
import imgs4 from "./img/upsc6.jpg";
import imgs5 from "./img/upsc4.jpg";




function UpscBook() {
    return (

        <div>

            <div>

                <h1 style={{ marginLeft: "550px", padding: "30px", fontWeight: "bold", textDecoration: "underline" }}> Upsc Book </h1>


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
                            <h2 className="product-title" style={{ marginLeft: "20px", textDecoration: "underline" }}>Upsc Book</h2>
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
                                <p className="last-price">Old Price: <span>$757.00</span></p>
                                <p className="new-price">New Price: <span>$500.00 (5%)</span></p>
                            </div>

                            <div className="product-detail">
                                <h2 style={{ fontWeight: "bold", textDecoration: "underline" }} >About this Book: </h2>
                                <p style={{ color: "black", fontSize: "large" }}>
                                    help you think beyond the issue but relevant to the issue from UPSC prelims and Mains exam point of view.
                                </p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }} >  Authors: </h5> <p style={{ fontWeight: "bold", fontSize: "large" }}  >Rhythm </p>
                                {/*  <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }}   > Genres:</h5>  <p style={{ fontWeight: "bold", fontSize: "large" }} > </p>
                              
                              */}


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

export default UpscBook