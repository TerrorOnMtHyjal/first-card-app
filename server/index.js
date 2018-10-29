const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server operational on port 8000');
});

app.get('/test', (req, res) => {
    res.send('Working!');
});

app.listen(8000, () => console.log('Listening to port 8000!'));

//yerp