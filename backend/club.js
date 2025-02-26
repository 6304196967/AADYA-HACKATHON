const express = require("express");
const Club = require("./db");

const clubRouter = express.Router();

clubRouter.get("/", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

clubRouter.post("/join", async (req, res) => {
  const { clubId, name, email, year, branch } = req.body;

  try {
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ message: "Club not found" });

    club.members.push({ name, email, year, branch });
    club.totalStudents += 1;
    await club.save();

    res.json({ message: `Successfully joined ${club.name}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
