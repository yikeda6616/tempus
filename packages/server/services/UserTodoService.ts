import { UserTodo } from '../entities';
import { UserTodoRepository } from '../repositories';

export class UserTodoService {
  static async create(todo: UserTodo) {
    await UserTodoRepository.create(todo);
  }

  static async get(tid: string) {
    await UserTodoRepository.get(tid);
  }
}
