/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { AvtCard } from './Components/AvtCard'
import { InfoCard } from './Components/InfoCard'


import AvtData from '../Data/AvtData'
import CardData from '../Data/PopularCardData'
import TopBookedData from '../Data/TopBookedData'


import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const HomePage = () => {

    //  slick-slider Carousel
    const settings = {
        Infinite: true,
        dots: false,
        slidesToShow: 1,
        lazyLoad: false,
        autoplay: false,
        // autoplaySpeed: 2000
    };


    // responsive slick-slider
    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container-fluid p-0 m-0'>

            {/* First Section Navigation */}
            <div className='container-fluid p-0 m-0' style={{ backgroundColor: '#2e3094', height: 'auto' }}>
                <div className='container-xl'>
                    <div className='row'>

                        {/* Using Map function to get all data and render competent */}
                        <div className='row col-sm-12 col-md-8 col-lg-8 d-flex align-items-center p-3'>
                            {
                                AvtData?.map((item, i) => {
                                    return <AvtCard props={item} key={i} />;
                                })
                            }
                        </div>

                        <div className='col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-end p-3'>

                            <a className='m-2' href='https://www.google.com'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>

                            <a className='m-2' href='https://www.google.com'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>

                            <a className='m-2' href='https://www.google.com'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                            </a>

                        </div>

                    </div>
                </div>
            </div>

            {/* 2nd Navigation Section */}
            <div className='container-fluid p-0 m-0' style={{ backgroundColor: '#ffffff' }}>
                <div className='container-xxl p-4'>
                    <div className='row d-flex align-items-center'>

                        <div className='col-sm-12 col-md-8 col-lg-10'>
                            <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>Logo</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-between col-sm-12 col-md-4 col-lg-2'>
                            <button className='btn btn-outline-primary'>Login/SignUp</button>
                            <svg style={{ color: '#336798' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Navigation Section */}
            <div className='container-fluid p-2' style={{ backgroundColor: '#f3f3f3' }}>
                <div className='container-xxl'>
                    <div className='row gx-3 d-flex align-items-center'>

                        <div className='mt-2 mb-2 col-sm-12 col-md-4 col-lg-2'>
                            <div className="btn-group dropdown w-100">
                                <button type="button" className="btn d-flex align-items-center" style={{ fontSize: 'x-large', backgroundColor: '#fff', color: 'black' }}>
                                    <svg style={{ marginRight: '6px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    Select City
                                </button>
                                <button type="button" className="btn dropdown-toggle dropdown-toggle-split" style={{ fontSize: 'x-large', backgroundColor: '#fff', color: 'black' }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={'..'}>Latur</a></li>
                                    <li><a className="dropdown-item" href={'..'}>Solapur</a></li>
                                    <li><a className="dropdown-item" href={'..'}>Pune</a></li>
                                    <li><a className="dropdown-item" href={'..'}>Hyderabad</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-2 mb-2 col-sm-12 col-md-6 col-lg-9'>
                            <div className="input-group p-0 m-0 has-validation">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInputGroup2" placeholder="Search For lab Tests or Health packages" />
                                    <label htmlFor="floatingInputGroup1">
                                        <svg style={{ marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                        Search For lab Tests or Health packages
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-2 mb-2 col-sm-12 col-md-2 col-lg-1'>
                            <button className='btn p-2 w-100' style={{ fontSize: 'x-large', backgroundColor: '#00bbcf', color: 'white' }}>Search</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* sec-4 Carousel Section */}
            <div className='container-fluid mt-3 p-3'>
                <div className='container-xxl'>
                    <div className='row'>

                        <div className='conatiner-fluid mt-2'>
                            <div className='row'>
                                <Slider {...settings}>
                                    {
                                        AvtData.map((item, i) => {
                                            return <div key={i} className="d-flex align-items-center justify-content-center">
                                                <img className='Slider-img' src={item.Image} alt="#..." style={{ width: "100%", height: "350px" }} />
                                            </div>
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* sec-5 Popular Tests Section */}
            <div className='container-fluid mt-3 p-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Popular Tests</h5>
                            <div style={{ color: "blue" }}>View All</div>
                        </div>

                        <div className='conatiner-fluid mt-2'>
                            <div className='row g-3'>
                                {
                                    CardData?.map((item, i) => {
                                        return <InfoCard props={item} key={i} />
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* sec-6 Popular Health Packages Section */}
            <div className='container-fluid mt-3 p-3' style={{ backgroundColor: "#f5f5f5" }}>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Popular Health packages</h5>
                            <div style={{ color: "blue" }}>View All</div>
                        </div>

                        <div className='conatiner-fluid mt-2'>
                            <div className='row g-3'>
                                {
                                    CardData?.map((item, i) => {
                                        return <InfoCard props={item} key={i} />
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*sec-7 slick-slider Section */}
            <div className='container-fluid mt-3 p-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Top Booked Tests</h5>
                            <div style={{ color: "blue" }}>View All</div>
                        </div>

                        <div className='conatiner-fluid mt-2'>
                            <div className='row'>
                                <Slider {...setting}>
                                    {
                                        TopBookedData?.map((item, i) => {

                                            return <div key={i} className='col-sm-12 col-md-6 col-lg-3'>
                                                <div className='card m-1' >
                                                    <img className='card-img-top' src={item.CardIMg} alt="#" />
                                                    <div className='card-body mt-2'>
                                                        <h5 className='card-title text-black'>{item.CardTitle}</h5>
                                                        <div className='content' style={{ color: "gray" }}>{item.Summary}</div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className="d-flex justify-content-around">
                                                        <div>
                                                            &#8377;{item.Price}
                                                            <p style={{ color: "green" }}><strike style={{ color: "gray" }}>&#8377;{item.Discount_Price}</strike> {item.Discount}</p>
                                                        </div>
                                                        <button className='btn btn-outline-info' style={{ width: "10rem", height: "2.5rem" }}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>

                                        })
                                    }
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*sec-8 footer Section */}
            <div className='container-fluid mt-3 me-0 ms-0 p-3' style={{ backgroundColor: "#2e3094", color: "#fff" }}>
                <div className='container-xxl'>
                    <div className='row align-items-center justify-content-end p-3'>
                        <div className='row All-Footers-Links'>
                            <div className=' col-sm-12 col-md-7 col-lg-7 Web-Links'>
                                <div className='row '>
                                    <div className='col-sm-12 col-md-4 col-lg-4'>
                                        <p><b>Quick Links</b></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }} >FAQ's</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }} >About Us</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }} >Contact Us</a></p>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-4'>
                                        <p><b>Services</b></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Order Medicine</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Lab Tests</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Doctor Consultation</a></p>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-4 '>
                                        <p><b>Our Policies</b></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Privacy Policy</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Terms and Conditions</a></p>
                                        <p><a href="#" style={{ textDecoration: "none", color: "white" }}>Cancellation Policy</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-5 col-lg-5 Social-Links'>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-6 col-lg-6'>
                                        <div><b>Social</b></div>
                                        <p className='d-flex mt-1'>
                                            <a className='m-2' href='https://www.google.com'>
                                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>

                                            <a className='m-2' href='https://www.google.com'>
                                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>

                                            <a className='m-2' href='https://www.google.com'>
                                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                                </svg>
                                            </a>
                                        </p>
                                        <p>Need Help?</p>
                                        <p>
                                            <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg> +919876543210
                                        </p>
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6'>
                                        <p><b>Our App</b></p>
                                        <div className="p-1"><img src='https://upload.wikimedia.org/wikipedia/commons/archive/7/78/20160421094326%21Google_Play_Store_badge_EN.svg' style={{ height: "40px", width: "117px" }} alt='#...' /> </div>
                                        <div className='mt-2 p-1'><img src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-pre-order-on-the-app-store.svg' alt='#...' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-top text-center w-100 p-3'>
                            <p>All CopyRights Are Reserved <b>@medleymed ISO-2022:2023</b> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}