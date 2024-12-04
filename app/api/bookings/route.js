/*
    bookings/route.js

    This is the api route for handling form submissions for booking requests.
*/

export async function POST(req) {
    try {
      const body = await req.json();
  
      // Replace this with your logic to handle booking requests:
      // - Send an email
      // - Save to a database
      // - Log the request
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
  
