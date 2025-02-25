/*
    BookingInquiry.css

    Component for band booking inquiries
    @TODO hook up Maddie's email instead of my own
*/

'use client';

import { useState } from 'react';

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

        // This makes it so the page does not reload on form submission
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
            <h1 className='text-center neonText'>Submit A Booking Request</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
                <label className='flex flex-col neonText'>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 text-lg border rounded-md"
                    />
                </label>

                <label className='flex flex-col neonText'>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 text-lg border rounded-md"
                    />
                </label>

                <label className='flex flex-col neonText'>
                    Message:
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 text-lg border rounded-md"
                    />
                </label>

                <button type="submit" className="p-3 bg-pink-400 text-white rounded-md hover:bg-pink-6000 transition">Send Request</button>
            </form>
        </div>
    );
}
