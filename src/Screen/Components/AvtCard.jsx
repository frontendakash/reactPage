import React from 'react'

export const AvtCard = (props) => {

    const { AvtImg, AvtName } = props.props;
    
    return (
        <div className='col-sm-12 col-md-4 col-lg-4 d-flex align-items-center mt-2 mb-2'>
            <img className='rounded me-2' src={AvtImg} alt='Avatar-img' />
            <p style={{color:'white',margin:0}}>{AvtName}</p>
        </div>
    )
}