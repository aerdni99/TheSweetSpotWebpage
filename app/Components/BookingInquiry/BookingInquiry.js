/*
    BookingInquiry.css

    Component for band booking inquiries
*/

'use client';

import { useState } from 'react';
import './BookingInquiry.css'

export default function BookingInquiry() {

    // State object
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    // This function is called every time there is a change made to the form
    /*
        'e' is the event object automatically passed by the onChange event listener
        e.target is the element in question
        e.target.name, and e.target.value will give you specific information about the element's current state

        prev is also automatically created. It refers to the previous state of our useState formData.
        The definition of the setFormData() function basically says "Selectively update the members of the state object"
    */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Asynchronous function for handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/bookings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              alert('Booking request sent!');
              setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
              alert('Failed to send booking request.');
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
          }
        };

    return (
        <div>
            <h1 className='neonText wrapper'>Submit A Booking Request</h1>
            <form onSubmit={handleSubmit}>
                <label className='neonText'>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </label>

                <label className='neonText'>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>

                <label className='neonText'>
                    Message:
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </label>

                <button type="submit">Send Request</button>
            </form>
        </div>
    );
}

/*



*/
