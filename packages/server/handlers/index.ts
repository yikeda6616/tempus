import * as express from 'express';
export const handler = express();

function createMethod(method: string) {
  return (url: string) => (target, property) => {
    handler[method](url, async (req, res) => {
      // Merge query and body to one object
      const params = {
        ...req.params,
        ...req.query,
        ...req.body,
      };
      try {
        const result = await target[property](params);
        res.send(result || 'success');
      } catch (err) {
        res.status(400).send(err.message);
      }
    });
  };
}

export const Get = createMethod('get');
export const Post = createMethod('post');
export const Put = createMethod('put');
export const Delete = createMethod('delete');

import './UserHandler';
import './UserTodoHandler';
