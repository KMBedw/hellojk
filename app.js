const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// port d'écoute... 123
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
