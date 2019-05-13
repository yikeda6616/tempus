import * as express from 'express';
import { createConnection, getRepository } from 'typeorm';
import { UserTodo } from './entities/';
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

// // Edit todo
// handler.put('/todo/:tid', async (req, res) => {
//   await getRepository(UserTodo).update(
//     {
//       uid: 1,
//       tid: req.params.tid,
//     },
//     {
//       name: req.body.name,
//     },
//   );
//   res.send('success');
// });

// // Delete todo
// handler.delete('/todo/:tid', async (req, res) => {
//   await getRepository(UserTodo).delete({
//     uid: 1,
//     tid: req.params.tid,
//   });
//   res.send('success');
// });

app.use('/api', handler);
