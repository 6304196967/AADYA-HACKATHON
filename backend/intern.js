const express = require("express");
const {Opportunity} = require("./db");

const internRouter = express.Router();
internRouter.post("/add", async (req, res) => {
    try {
        const { type, title, companyOrOrganizer, description } = req.body;

        const newOpportunity = new Opportunity({
            type,
            title,
            companyOrOrganizer,
            description
        });

        await newOpportunity.save();
        res.status(201).json({ message: "Opportunity added successfully!", newOpportunity });
    } catch (error) {
        res.status(500).json({ error: "Failed to add opportunity", details: error.message });
    }
});

internRouter.get("/all", async (req, res) => {
    try {
        const opportunities = await Opportunity.find();
        res.status(200).json(opportunities);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch opportunities", details: error.message });
    }
});

module.exports = internRouter;
