
const express = require('express');
const { response } = require('express');
// the following line may break the code. Confirm for correct in tomorrow's lecture
// const weather = require('/weather');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send('This is the request for the home request');
});

app.get('/example-request', (request, response) => {
  response.send('This is the request for the first custom route, which will evolve into a real route.');
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))