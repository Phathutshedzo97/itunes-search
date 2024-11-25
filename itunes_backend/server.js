// server.js

const express = require('express');
const axios = require('axios');
const corsMiddleware = require('./middleware');
const helmet = require('helmet'); // Import helmet

const app = express();
const port = process.env.PORT || 5009;

// Use the CORS middleware to enable CORS for requests from localhost:3000
app.use(corsMiddleware);

app.get('/api/search/:term/:mediaType', async (req, res) => {
  const { term, mediaType } = req.params;
  try {
    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term,
        media: mediaType,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from iTunes API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
