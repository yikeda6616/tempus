import * as express from 'express';
import { createConnection } from 'typeorm';
import { handler } from './handlers';

const app = express();

const PORT = 3001;

app.use(express.json());

(async () => {
  const connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'localuser',
    password: 'localpass',
    database: 'local',
    entities: ['entities/*'],
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})();

app.use('/api', handler);
