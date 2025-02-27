const express = require("express");
const notificationRouter = express.Router();

const notifications = [
  {
    id: 1,
    title: "New Event",
    message: "AI Webinar starts in 2 hours!",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Assignment Due",
    message: "Submit your ML assignment by tonight.",
    time: "5:00 PM",
  },
];

const reminders = [
  {
    id: 1,
    title: "Project Meeting",
    message: "Don't forget your team meeting at 3 PM.",
    time: "3:00 PM",
  },
  {
    id: 2,
    title: "Gym Session",
    message: "Workout session at 6 PM.",
    time: "6:00 PM",
  },
];

notificationRouter.get("/notification", (req, res) => {
  res.json(notifications);
});

notificationRouter.get("/reminder", (req, res) => {
  res.json(reminders);
});

module.exports = notificationRouter;
