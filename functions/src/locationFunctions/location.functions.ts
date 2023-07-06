import * as functions from 'firebase-functions';
const axios = require('axios');

export const proxyRequest = functions.https.onRequest((req, res) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.latitude},${req.query.longitude}&radius=${req.query.radius}&type=gym&key=${req.query.key}`;
    
    axios.get(apiUrl)
      .then((response: { data: any; }) => {
        res.json(response.data);
      })
      .catch((error: any) => {
        res.status(500).send('Error proxying the request');
      });
  });