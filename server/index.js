const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

app.get('/alive', (req, res, next) => {
  res.send('OK');
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${res.statusCode}`);
  next();
});

app.listen(port, () => {
  console.log('Started');
});
