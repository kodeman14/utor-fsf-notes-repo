const express = require('express');

const PORT = 3001;
const app = express();

// We can send a body parameter to the client using the res.send() method. This body parameter can be a string, buffer, or even an array.
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

// This method sends a JSON response with the correct content type.
app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
