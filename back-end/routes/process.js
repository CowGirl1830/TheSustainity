const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const Data = require('../models/DataModel');

const router = express.Router();

router.post('/process', async (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.body.filename);
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            results.push({
                date: new Date(row["Transaction Date"]),
                emission_kg: parseFloat(row["CO₂ Emissions (kg)"])
            });
        })
        .on('end', async () => {
            try {
                await Promise.all(
                    results.map(async (data) => {
                        await pool.query(
                            "INSERT INTO sustainability_data (date, emission_kg) VALUES ($1, $2)",
                            [data.date, data.emission_kg]
                        );
                    })
                );
                res.json({ message: "Data processed successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Database error" });
            }
        });
});

module.exports = router;
