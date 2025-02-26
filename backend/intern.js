const express = require("express");
const { internModel } = require("./db");

const internRouter = express.Router();
app.post("/api/intern/add", async (req, res) => {
    try {
        const { type, title, companyOrOrganizer, url } = req.body;

        if (!type || !title || !url) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newOpportunity = new internModel({
            type,
            title,
            companyOrOrganizer,
            location: "N/A", // Add default if missing
            description: "No description available" // Default description
        });

        await newOpportunity.save();

        res.status(201).json({ message: "Event added successfully!", newOpportunity });
    } catch (error) {
        console.error("Error adding event:", error);
        res.status(500).json({ error: "Failed to add event" });
    }
});


internRouter.get("/all", async (req, res) => {
    try {
        const { type } = req.query;
        const query = type ? { type } : {}; // Filter by type if provided
        const opportunities = await internModel.find(query);
        res.status(200).json(opportunities);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch opportunities", details: error.message });
    }
});


module.exports = internRouter;
