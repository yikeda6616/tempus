import * as express from 'express';
export const handler = express();

export function post(url: string) {
  return (target, property) => {
    handler.post(url, async (req, res) => {
      await target[property](req.body);
      res.send('success');
    });
  };
}

import './user';
