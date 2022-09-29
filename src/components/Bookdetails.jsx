import React, { useState } from 'react'
import './bookdetail.css'


const Bookdetails = () => {




    const [books, setBook] = useState({
        name: "",
        email: "",
        country: "",
        indianState: "",
        city: "",
        pincode: "",
        address: "",
        phoneNo: "",
        bookName: "",
        bookPrice: "",
        pages: "",
        priceNegotiable: "",
        bookCondition: "",
        message: ""
    });

    // Handle Inputs
    const handleChange2 = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setBook({ ...books, [name]: value });
    }




    //Handle Submit
    const handleSubmit2 = async (event) => {
        event.preventDefault();

        //Object DeStructuring
        //Store Object Data into Variables
        const {
            name, email, country, indianState, city, pincode, address, phoneNo, bookName, bookPrice, pages, priceNegotiable, bookCondition, message } = books;

        try {
            //It is Submitted on port 3000 by default
            // Which iFront End but we need to
            // Submit it on Backend which is on 
            // Port 3001. so we need Proxy

            const rest = await fetch('/bookdetails', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,

                    country,
                    indianState,
                    city,
                    pincode,
                    address,
                    phoneNo,
                    bookName,
                    bookPrice,
                    pages,
                    priceNegotiable,
                    bookCondition,

                    message
                })
            })
            console.log(rest.status)
            if (rest.status === 400 || !rest) {
                window.alert("Message Not Sent. Try Again Later")
            } else {

                // You need to Restart the Server for Proxy Works
                // Now try Again
                window.alert("Message Sent");

                setBook({
                    name: "",
                    email: "",

                    country: "",
                    indianState: "",
                    city: "",
                    pincode: "",
                    address: "",
                    phoneNo: "",
                    bookName: "",
                    bookPrice: "",
                    pages: "",
                    priceNegotiable: "",
                    bookCondition: "",

                    message: ""

                })

            }
        } catch (error) {
            console.log(error);
        }
    }







    return (
        <div>
            <div className=' styless'>
                <section id="contact ">
                    <div className="container my-5 py-5   ">
                        <div className="row mb-5">
                            <div className='col-12'>
                                <h3 className="fs-5 text-center mb-0   text">Contect Us</h3>
                                <h1 className='display-6 text-center mb-4  text '>User Details and Book Details</h1>
                                <hr className='w-25 mx-auto' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                {/*    <img src="/images/images1.jpg" alt="Contact" className='w-75' />        */}

                                <img src="Images/Contact2.jpg" alt="" className='img  ' />
                                <img src="Images/Contact.jpg" alt="" className='img  ' />
                                <img src="Images/Study2.jpg" alt="" className='img  ' />
                                <img src="Images/IT.jpg" alt="" className='img  ' />

                            </div>


                            <div className='col-md-6'>



                                <form onSubmit={handleSubmit2} method="POST" >

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> Your Name </label>
                                        <input type="text" className="form-control" id="name" placeholder="Shashank Singh"


                                            name='name'
                                            value={books.name}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label  text">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"


                                            name='email'
                                            value={books.email}
                                            onChange={handleChange2}


                                        />
                                    </div>


                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> country </label>
                                        <input type="text" className="form-control" id="name" placeholder="India"


                                            name='country'
                                            value={books.country}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> State </label>
                                        <input type="text" className="form-control" id="name" placeholder="Lucknow"


                                            name='indianState'
                                            value={books.indianState}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> city </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='city'
                                            value={books.city}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> pincode </label>
                                        <input type="text" className="form-control" id="name" placeholder="123456"


                                            name='pincode'
                                            value={books.pincode}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text">address </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='address'
                                            value={books.address}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> phoneNo </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='phoneNo'
                                            value={books.phoneNo}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> bookName</label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='bookName'
                                            value={books.bookName}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> bookPrice </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='bookPrice'
                                            value={books.bookPrice}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text"> pages </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='pages'
                                            value={books.pages}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text">priceNegotiable </label>
                                        <input type="text" className="form-control" id="pn" placeholder=""


                                            name='priceNegotiable'
                                            value={books.priceNegotiable}
                                            onChange={handleChange2}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label  text">bookCondition </label>
                                        <input type="text" className="form-control" id="name" placeholder=""


                                            name='bookCondition'
                                            value={books.bookCondition}
                                            onChange={handleChange2}

                                        />
                                    </div>





                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label   text">Book Detail</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"


                                            name='message'
                                            value={books.message}
                                            onChange={handleChange2}


                                        ></textarea>
                                    </div>



                                    <button type='submit' className='btn btn-outline-primary rounded-pill px-4    text'>Send it <i className="fa fa-paper-plane ms-2 "></i></button>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


export default Bookdetails;