import React, { useState, useEffect, useContext } from 'react';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
export default function ContactUs() {
    const {
        addToDocument
    } = useContext(mainFunctions)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addToDocument('contactus', formData, false).then(
            (result) => {
                console.log('THis is the result', result)
            }
        )
        // You can submit the form data to your backend or perform any other actions here.
        console.log(formData);
    };
    return (
        <div>
            <TopHeader />
            <Hero
                title="Contact Us"
                bg="job_offers.svg"
            />
            <div className='section_main'>
                <div className='section_subtitle'>Fill the form below to contact us.</div>

                <form onSubmit={handleSubmit} className='form1'>
                    <div className="formgroup">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formgroup">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formgroup">
                        <label>Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formgroup">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formgroup">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.introduction}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    );
}
