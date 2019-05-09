import * as express from 'express';
import { createConnection, Connection, getRepository } from 'typeorm';
import { User } from './entities/User';
import { UserTodo } from './entities/UserTodo';

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

handler.post('/todo', async (req, res) => {
  const todo = new UserTodo();
  todo.uid = 1;

  todo.name = 'testtodo';
  todo.createdAt = new Date();
  await getRepository(UserTodo).insert(todo);
  res.send('success');
});

app.use('/api', handler);
