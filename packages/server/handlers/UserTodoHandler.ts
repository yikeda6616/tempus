import { Post, Get, Put, Delete } from '.';
import { UserTodo } from '../entities';
import { UserTodoService } from '../services/UserTodoService';
import * as Ajv from 'ajv';

const schema = {
  required: ['tid'],
  properties: {
    tid: {
      type: 'string',
      maxLength: 36,
      minLength: 36,
    },
  },
};

const ajv = new Ajv();

interface CreateRequest {
  name: string;
}

interface GetRequest {
  tid: string;
}

interface PutRequest {
  tid: string;
  name: string;
}

interface DeleteRequest {
  tid: string;
}

class UserTodoHandler {
  @Post('/todo')
  static async create(params: CreateRequest) {
    const todo = new UserTodo();
    todo.uid = 3; // TODO:
    // TODO: Add ajv validation
    todo.name = params.name;
    todo.createdAt = new Date();
    await UserTodoService.create(todo);
  }

  @Get('/todo/:tid')
  static async get(params: GetRequest) {
    const valid = ajv.validate(schema, params);
    if (!valid) throw new Error(ajv.errorsText());

    return await UserTodoService.get(params.tid);
  }

  @Put('/todo/:tid')
  static async update(params: PutRequest) {
    return await UserTodoService.update(params.tid, params.name);
  }

  @Delete('/todo/:tid')
  static async delete(params: DeleteRequest) {
    return await UserTodoService.delete(params.tid);
  }
}
