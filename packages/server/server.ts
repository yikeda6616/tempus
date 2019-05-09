import * as express from 'express';
import { createConnection, Connection, getRepository } from 'typeorm';
import { User } from './entities/User';

const app = express();

const PORT = 3001;

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

const handler = express();

handler.post('/user', async (req, res) => {
  const user = new User();
  user.id = 1;
  user.name = 'test';
  await getRepository(User).insert(user);
  res.send('success');
});

app.use('/api', handler);
