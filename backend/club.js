const express = require("express");
const { ClubModel } = require("./db");

const clubRouter = express.Router();

// Get all clubs
clubRouter.get("/", async (req, res) => {
  try {
    const clubs = await ClubModel.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Join a club
clubRouter.post("/join", async (req, res) => {
    const { clubId, name, email, year, branch } = req.body;
  
    try {
      const club = await ClubModel.findById(clubId);
      if (!club) return res.status(404).json({ message: "Club not found" });
  
      // Check if the user is already a member
      const isMember = club.members.some((member) => member.email === email);
      if (isMember) return res.status(400).json({ message: "Already a member" });
  
      // Add new member and increment student count
      const updatedClub = await ClubModel.findByIdAndUpdate(
        clubId,
        { 
          $push: { members: { name, email, year, branch } },
          $inc: { totalStudents: 1 } 
        },
        { new: true } 
      );
  
      res.json({ message: `Successfully joined ${updatedClub.name}`, club: updatedClub });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
module.exports = clubRouter;
