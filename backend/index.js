const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('build'));
app.get('/', (req, res) => {
    res.status(200).end();
});

const Port = process.env.Port || 5000;

app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})