const express = require('express');
const axios = require('axios');
const app = express();

app.get('/sub/merged_proxies.yaml', async (req, res) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/CHINAupup/proxy-go-merge/main/sub/merged_proxies.yaml');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

module.exports = app;
