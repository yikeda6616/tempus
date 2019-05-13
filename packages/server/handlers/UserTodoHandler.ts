import { Post, Get, Put, Delete } from '.';
import { UserTodo } from '../entities';
import { UserTodoService } from '../services/UserTodoService';

const uid = 1;

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
    todo.name = params.name;
    todo.createdAt = new Date();
    await UserTodoService.create(todo);
  }

  @Get('/todo/:tid')
  static async get(params: GetRequest) {
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
