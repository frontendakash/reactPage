import React from 'react'
import { AvtCard } from './Components/AvtCard'
import AvtData from '../Data/AvtData'

export const HomePage = () => {

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
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>

                            <a className='m-2' href='https://www.google.com'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>

                            <a className='m-2' href='https://www.google.com'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
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

                        <div className='col-sm-12 col-md-10 col-lg-10'>
                            <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>Logo</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-between col-sm-12 col-md-2 col-lg-2'>
                            <button className='btn btn-outline-primary'>Login/SignUp</button>
                            <svg style={{ color: '#336798' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
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

                        <div className='mt-2 mb-2 col-sm-12 col-md-2 col-lg-2'>
                            <div class="btn-group dropdown w-100">
                                <button type="button" class="btn d-flex align-items-center" style={{ fontSize: 'x-large', backgroundColor: '#fff', color: 'black' }}>
                                    <svg style={{ marginRight: '6px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    Select City
                                </button>
                                <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style={{ fontSize: 'x-large', backgroundColor: '#fff', color: 'black' }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href={'..'}>Latur</a></li>
                                    <li><a class="dropdown-item" href={'..'}>Solapur</a></li>
                                    <li><a class="dropdown-item" href={'..'}>Pune</a></li>
                                    <li><a class="dropdown-item" href={'..'}>Hyderabad</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-2 mb-2 col-sm-12 col-md-9 col-lg-9'>
                            <div class="input-group p-0 m-0 has-validation">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Search For lab Tests or Health packages" />
                                    <label for="floatingInputGroup1">
                                        <svg style={{ marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                        Search For lab Tests or Health packages
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-2 mb-2 col-sm-12 col-md-1 col-lg-1'>
                            <button className='btn p-2 w-100' style={{ fontSize: 'x-large', backgroundColor: '#00bbcf', color: 'white' }}>Search</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}