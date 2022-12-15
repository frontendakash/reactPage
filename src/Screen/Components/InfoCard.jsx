import React from 'react'

export const InfoCard = (props) => {

    const { CardIMg, CardTitle, Summary, Price, Discount,Discount_Price} = props.props;

    return (
        <>
            <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card m-1' >
                    <img className='card-img-top' src={CardIMg} alt="#" />
                    <div className='card-body mt-2'>
                        <h5 className='card-title text-black'>{CardTitle}</h5>
                        <div className='content' style={{ color: "gray" }}>{Summary}</div>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-around">
                        <div>
                        &#8377;{Price}
                            <p style={{ color: "green" }}><strike style={{ color: "gray" }}>&#8377;{Discount_Price}</strike> {Discount}</p>
                        </div>
                        <button className='btn btn-outline-info' style={{ width: "10rem", height: "2.5rem" }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
