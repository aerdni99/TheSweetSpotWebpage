/*
    bookings/route.js

    This is the api route for handling form submissions for booking requests.
*/

import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
      const body = await req.json();
  
      // Replace this with your logic to handle booking requests:
      // - Send an email
      // - Save to a database
      // - Log the request

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"wemsite Contact" <${process.env.EMAIL_USER}`,
        to: 
      }

      console.log('Booking Request Received:', body);
  
      return new Response(JSON.stringify({ message: 'Booking request received' }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error processing booking' }), {
        status: 500,
      });
    }
  }
  
