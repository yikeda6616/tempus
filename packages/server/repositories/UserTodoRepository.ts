import { UserTodo } from '../entities';
import { getRepository } from 'typeorm';

export class UserTodoRepository {
  static async create(todo: UserTodo) {
    await getRepository(UserTodo).insert(todo);
  }

  static async get(tid: string) {
    return await getRepository(UserTodo).findOne({ uid: 1, tid });
  }
}
