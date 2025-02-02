// pages/api/clerk-signin.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('https://api.clerk.dev/v1/your-api-endpoint', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ /* your request body */ })
        });
  
        const data = await response.json();
  
        // Handle the response data here
        if (response.ok) {
          res.status(200).json(data); // Send back data to the client if successful
        } else {
          res.status(response.status).json(data); // Send error if any
        }
  
      } catch (error) {  
        res.status(500).json({ error: error.message || 'Server error' });  
      }  
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  