import * as express from 'express';

const app = express();

const PORT = 3001;

app.get('/api', (req, res) => {
  console.log(req);
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
