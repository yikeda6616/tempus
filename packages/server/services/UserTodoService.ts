import { UserTodo } from '../entities';
import { UserTodoRepository } from '../repositories';

export class UserTodoService {
  static async create(todo: UserTodo) {
    await UserTodoRepository.create(todo);
  }

  static async get(tid: string) {
    return await UserTodoRepository.get(tid);
  }

  static async update(tid: string, name: string) {
    await UserTodoRepository.update(tid, name);
  }

  static async delete(tid: string) {
    await UserTodoRepository.delete(tid);
  }
}
