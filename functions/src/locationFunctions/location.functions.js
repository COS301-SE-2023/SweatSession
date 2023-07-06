import * as functions from "firebase-functions";
import * as axios from "axios";

exports.proxyRequest = functions.https.onRequest(async (req, res) => {
  try {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.latitude},${req.query.longitude}&radius=${req.query.radius}&type=gym&key=${req.query.key}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error proxying the request");
  }
});