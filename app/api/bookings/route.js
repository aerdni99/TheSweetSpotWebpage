/*
    bookings/route.js

    This is the api route for handling form submissions for booking requests.

    @TODO verify sender's email address, current strategy for validation just requires an '@' symbol in the email string.
*/

import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
      const body = await req.json();
  
      // Replace this with your logic to handle booking requests:
      // - Send an email
      // - Save to a database
      // - Log the request

      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('EMAIL_USER and EMAIL_PASS must be defined in environment variables.');
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        logger: true, // Logs to console
      });

      console.log(body.email)
      const mailOptions = {
        from: body.email,
        to: process.env.EMAIL_USER,
        subject: `Booking Request From ${body.name}`,
        text: body.message,
        html: `
        <h2>Booking Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
      };

      console.log('Booking Request Received:', body);

      await transporter.sendMail(mailOptions);
  
      return new Response(JSON.stringify({ message: 'Booking request sent!' }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error processing booking request' }), {
        status: 500,
      });
    }
  }
  
