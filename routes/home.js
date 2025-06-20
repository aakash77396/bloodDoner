const express = require("express");
const Doner = require("../models/bloodDoner");
const bloodDoner = require("../models/bloodDoner");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const doner = new Doner(req.body);
        await doner.save();
        res.status(200).json({ message: 'doner saved successfully', doner });
    } catch (error) {
        res.status(400).json({ error: 'Error saving doner', details: error });
    }
})


router.get("/", async (req, res) => {
    try {

        const doners = await Doner.find();

        if (doners.length === 0) {
            return res.status(200).json({
                message: "No doners found. Be the first doner!",
                doners: []
            });
        }

        res.status(200).json({ message: "doner Fetch successfully", doners });
    } catch (error) {
        res.status(400).json({ message: "doner can't Fetch", error });
    }
})

module.exports = bloodDoner;