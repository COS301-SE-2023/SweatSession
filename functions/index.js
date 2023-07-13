// import * as functions from "firebase-functions";
// import * as axios from "axios";
const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
exports.nearbyGymProxyRequest = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set('Access-Control-Max-Age', '3600');
  try {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.latitude},${req.query.longitude}&radius=${req.query.radius}&type=gym&key=${req.query.key}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error proxying the request");
  }
});

// const firestore = admin.firestore();

exports.checkScheduledWorkouts = functions.pubsub
  .schedule('every 1 minutes')
  .onRun(async (context) => {
    const firestore = admin.firestore();
    const Snapshot = await firestore.collection('WorkoutSchedule').get();
    Snapshot.forEach(async (doc)=>{
        const now = new Date();
        const scheduledWorkoutsRef = firestore.collection(`WorkoutSchedule/${doc.id}/userSchedules`);
        const snapshot = await scheduledWorkoutsRef.get();

        snapshot.forEach(async (innerDoc) => {
          const workout = innerDoc.data();
          const scheduledDateTime = workout.notifyAt;


          if (scheduledDateTime <= now && workout.status !== 'completed' && !workout.notified) {
            console.log(workout.completeAt);
            console.log(now);
            // Send a notification to the user userId == doc.id
            await innerDoc.ref.update({notified: true});
            await sendNotificationToUser(workout, "You have a session in 5 minutes");

            if(workout.completeAt <= now) {
              // Send a notification to the user userId == doc.id
              await sendNotificationToUser(workout, "schedule completed");
              await innerDoc.ref.update({ status: 'completed' });
            }
          }
        });
    })
       
    return null;
  });

async function sendNotificationToUser(schedule, message) {
  //implement the notification logic here....
}