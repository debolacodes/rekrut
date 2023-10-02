import React from 'react';

export default function Hero({ title = "", bg = "learning.svg" }) {
    var divStyle = {
        backgroundImage: `url(${require('../../assets/' + bg)})`,
        backgroundSize: '60%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className='hero'>
            <div className='left_container'>
                <h1>{title}</h1>
            </div>
            <div className='right_container hero_bg' style={divStyle}>

            </div>
        </div >
    );
}
