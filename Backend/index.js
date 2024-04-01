const express = require('express');

const cors = require('cors')
const router = require('./DB/Route');
const app = express();
const port = 8080;


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is first page');
});

app.use('/data', router);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
