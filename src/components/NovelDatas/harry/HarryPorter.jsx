import React from 'react'
import './harryPorter.css';
//  import { Button } from 'react-bootstrap';
import history from './history';

import imgs1 from "./img/harry14.jpg";
import imgs2 from "./img/harry1.jpg";
import imgs3 from "./img/harry2.jpg";
import imgs4 from "./img/harry3.jpg";
import imgs5 from "./img/harry4.jpg";


const HarryPorter = () => {
    return (

        <div>



            <div >
                <div className="card-Head22">
                    <h1 style={{ marginLeft: "550px", padding: "30px", fontWeight: "bold", textDecoration: "underline" }}>Harry Porter </h1>
                </div>

                <div className="card-wrapper111">
                    <div className="card">
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src={imgs1} alt="shoe image" style={{ width: "570px", height: "550px", marginTop: "0px" }} />

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
                            <h2 className="product-title" style={{ marginLeft: "20px", textDecoration: "underline" }}>Harry Porter</h2>
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
                                <p className="last-price">Old Price: <span>$657.00</span></p>
                                <p className="new-price">New Price: <span>$500.00 (5%)</span></p>
                            </div>

                            <div className="product-detail">
                                <h2 style={{ fontWeight: "bold", textDecoration: "underline" }} >About this Noval: </h2>
                                <p style={{ color: "black", fontSize: "large" }}>
                                    Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
                                </p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }} >  Authors: </h5> <p style={{ fontWeight: "bold", fontSize: "large" }}  >J. K. Rowling</p>
                                <h5 style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "large" }}   > Genres:</h5>  <p style={{ fontWeight: "bold", fontSize: "large" }} >  A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story</p>
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


                                <a href="" onClick={() => history.push('/Transaction')} className='btn btn-outline-primary rounded-pill px-4    btn3'    >Buy Now</a>


                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>





    )
}





export default HarryPorter;