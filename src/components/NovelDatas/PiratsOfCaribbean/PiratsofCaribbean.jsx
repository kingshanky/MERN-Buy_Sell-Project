import React from 'react'
import './poc.css';

import history from './history';
import imgs1 from "./img/pk20.jpg";
import imgs2 from "./img/pk1.jpg";
import imgs3 from "./img/pk2.jpg";
import imgs4 from "./img/pk3.jpg";
import imgs5 from "./img/pk4.jpg";


function PiratsofCaribbean() {
    return (

        <div>

            <div>

                <h1 style={{ marginLeft: "550px", padding: "30px", fontWeight: "bold", textDecoration: "underline" }}>  Pirats Of Caribbean </h1>


                <div className="card-wrapper">
                    <div className="card">
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src={imgs1} alt="shoe image" />
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
                                        <img src={imgs3} alt="shoe image" style={{ width: "270px", height: "250px" }} />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="3">
                                        <img src={imgs4} alt="shoe image" style={{ width: "320px", height: "250px" }} />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="4">
                                        <img src={imgs5} alt="shoe image" style={{ width: "270px", height: "250px" }} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="product-content">
                            <h2 className="product-title" style={{ marginLeft: "20px", textDecoration: "underline" }}> Pirats Of Caribbean</h2>
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
                                <h2 style={{ fontWeight: "bold", textDecoration: "underline" }} >About this Noval: </h2>
                                <p style={{ color: "black", fontSize: "large" }}>
                                    The Wings of Fire is an autobiography of former Indian President APJ Abdul Kalam. The book covers his life before he became the President of India and commanded the armed forces. Renowned scientist and former Indian President APJ Abdul Kalam from 2002 to 2007 is well known across India and abroad as well.
                                </p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }} >  Authors: </h5> <p style={{ fontWeight: "bold", fontSize: "large" }}  >A. P. J. Abdul Kalam</p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }}   > Genres:</h5>  <p style={{ fontWeight: "bold", fontSize: "large" }} >Autobiography</p>
                                <br />
                                <ul >
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Available: <span> Yes </span></li>
                                    <li style={{ marginRight: "60px", fontSize: "large" }} >  Category: <span> Novel </span></li>
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


                                <a href="" onClick={() => history.push('/payNow')} className='btn btn-outline-primary rounded-pill px-4    btn3'    >Buy Now</a>


                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>



    )
}

export default PiratsofCaribbean