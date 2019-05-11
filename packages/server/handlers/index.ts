import * as express from 'express';
export const handler = express();

function createMethod(method: string) {
  return (url: string) => (target, property) => {
    handler[method](url, async (req, res) => {
      const result = await target[property](req.body);
      res.send(result || 'success');
    });
  };
}

export const get = createMethod('get');
export const post = createMethod('post');

import './UserHandler';
