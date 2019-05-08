import * as express from 'express';

const app = express();

const PORT = 3001;

// CORSを許可する
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  console.log(req);
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
