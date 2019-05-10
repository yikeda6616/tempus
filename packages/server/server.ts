import * as express from 'express';
import { createConnection, Connection, getRepository } from 'typeorm';
import { User } from './entities/User';
import { UserTodo } from './entities/UserTodo';
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

const handler = express();

handler.post('/user', async (req, res) => {
  const user = new User();
  user.name = 'test';
  await getRepository(User).insert(user);
  res.send('success');
});

handler.get('/todo', async (req, res) => {
  const todo = await getRepository(UserTodo).find({
    uid: 1,
  });
  res.send(todo);
});

handler.get('/todo/:tid', async (req, res) => {
  const todo = await getRepository(UserTodo).findOne({
    uid: 1,
    tid: req.params.tid,
  });
  res.send(todo);
});

handler.post('/todo', async (req, res) => {
  console.log(req.body);
  const todo = new UserTodo();
  todo.uid = 2;
  todo.name = req.body.name;
  todo.createdAt = new Date();
  await getRepository(UserTodo).insert(todo);
  res.send(todo);
});

handler.put('/todo/:tid', async (req, res) => {
  await getRepository(UserTodo).update(
    {
      uid: 2,
      tid: req.params.tid,
    },
    {
      name: req.body.name,
    },
  );
  res.send('success');
});

handler.delete('/todo/:tid', async (req, res) => {
  await getRepository(UserTodo).delete({
    uid: 2,
    tid: req.params.tid,
  });
  res.send('success');
});

app.use('/api', handler);
