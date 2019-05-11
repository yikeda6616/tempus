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

// Create user
handler.post('/user', async (req, res) => {
  const user = new User();
  user.name = req.body.name;
  await getRepository(User).insert(user);
  res.send('success');
});

// Show user
handler.get('/user/:uid', async (req, res) => {
  const user = await getRepository(User).find({
    id: req.params.uid,
  });
  res.send(user);
});

// Edit user
handler.put('/user/:uid', async (req, res) => {
  await getRepository(User).update(
    {
      id: req.params.uid,
    },
    {
      name: req.body.name,
    },
  );
  res.send('success');
});

// Delete user
handler.delete('/user/:uid', async (req, res) => {
  await getRepository(User).delete({
    id: req.params.uid,
  });
  res.send('success');
});

// Create todo
handler.post('/todo', async (req, res) => {
  const todo = new UserTodo();
  todo.uid = 1;
  todo.name = req.body.name;
  todo.createdAt = new Date();
  await getRepository(UserTodo).insert(todo);
  res.send(todo);
});

// Show one todo
handler.get('/todo/:tid', async (req, res) => {
  console.log('hallo');
  const todo = await getRepository(UserTodo).findOne({
    uid: 1,
    tid: req.params.tid,
  });
  res.send(todo);
});

// Edit todo
handler.put('/todo/:tid', async (req, res) => {
  await getRepository(UserTodo).update(
    {
      uid: 1,
      tid: req.params.tid,
    },
    {
      name: req.body.name,
    },
  );
  res.send('success');
});

// Delete todo
handler.delete('/todo/:tid', async (req, res) => {
  await getRepository(UserTodo).delete({
    uid: 1,
    tid: req.params.tid,
  });
  res.send('success');
});

app.use('/api', handler);
