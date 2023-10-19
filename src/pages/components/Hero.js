import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero({ title = "", bg = "learning.svg", subtitle = "", image_url="", showButton=false }) {
    var divStyle = {
        backgroundImage: `url(${image_url !== "" ? image_url : require('../../assets/' + bg)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    const navigate = useNavigate()


    return (
        <div className='hero'>
            <div className='layer'>
                <div className='left_container'>
                    <h1>{title}</h1>
                    {subtitle !== "" &&
                        <p>{subtitle}</p>
                    }
                    {showButton &&
                    <div className='cta'
                    onClick={() => {
                        navigate('/jobs')
                    }}
                    >
                    Find Jobs Now
                    </div>
                    }
                </div>
                <div className='right_container hero_bg' style={divStyle}>

                </div>
            </div>
        </div >
    );
}
