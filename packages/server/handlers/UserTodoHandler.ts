import { Post, Get, Put, Delete } from '.';
import { UserTodo } from '../entities';
import { UserTodoService } from '../services/UserTodoService';
import * as Ajv from 'ajv';

const ajv = new Ajv();

// Validation schema
const createSchema = {
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      maxLength: 140,
      minLength: 1,
    },
  },
};

// Validation schema
const getSchema = {
  required: ['tid'],
  properties: {
    tid: {
      type: 'string',
      maxLength: 36,
      minLength: 36,
    },
  },
};

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
    todo.uid = 3; // TODO: Change from hardcode

    // Validate data(params)
    const valid = ajv.validate(createSchema, params);
    if (!valid) throw new Error(ajv.errorsText());

    todo.name = params.name;
    todo.createdAt = new Date();
    await UserTodoService.create(todo);
  }

  @Get('/todo/:tid')
  static async get(params: GetRequest) {
    // Validate data(params)
    const valid = ajv.validate(getSchema, params);
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
