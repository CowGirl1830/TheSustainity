const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// Get all data
router.get('/data', async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM sustainability_data");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

// Get specific record by ID
router.get('/data/:id', async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM sustainability_data WHERE id = $1", [req.params.id]);
        if (!rows.length) return res.status(404).json({ error: "Record not found" });
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

module.exports = router;
