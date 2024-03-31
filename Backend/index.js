const express = require('express');
const app = express();
const client = require('./DB/Db');
const Route = require('./DB/Route');


let port = 6000

// app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is first page')
})
app.use('/data', Route.route)


app.listen(port, () => console.log(`server runnning on ${port}`))