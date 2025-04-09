const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/database');

dotenv.config();
db.connect(); 

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/process'));
app.use('/api', require('./routes/data'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
