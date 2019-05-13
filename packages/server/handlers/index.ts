import * as express from 'express';
export const handler = express();

function createMethod(method: string) {
  return (url: string) => (target, property) => {
    handler[method](url, async (req, res) => {
      const params = {
        ...req.query,
        ...req.body,
      };
      const result = await target[property](params);
      res.send(result || 'success');
    });
  };
}

export const Get = createMethod('get');
export const Post = createMethod('post');
export const Put = createMethod('put');
export const Delete = createMethod('delete');

import './UserHandler';
import './UserTodoHandler';
