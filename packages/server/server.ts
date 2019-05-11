import * as express from 'express';
import { createConnection, Connection, getRepository } from 'typeorm';
import { User } from './entities/User';
import { UserTodo } from './entities/UserTodo';
import * as user from './handlers/user';
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
