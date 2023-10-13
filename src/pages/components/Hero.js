import React from 'react';

export default function Hero({ title = "", bg = "learning.svg", subtitle = "", image_url="" }) {
    var divStyle = {
        backgroundImage: `url(${image_url !== "" ? image_url : require('../../assets/' + bg)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };


    return (
        <div className='hero'>
            <div className='layer'>
                <div className='left_container'>
                    <h1>{title}</h1>
                    {subtitle !== "" &&
                        <p>{subtitle}</p>
                    }
                </div>
                <div className='right_container hero_bg' style={divStyle}>

                </div>
            </div>
        </div >
    );
}
