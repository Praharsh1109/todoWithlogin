const express = require('express');
const route = require('./DB/Route');
const cors = require('cors')
const app = express();
const port = 6000;

app.use(cors())
// Middleware to parse JSON requests (if needed)
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('this is first page');
});

// Use the router for the /data endpoint
app.use('/data', route);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
