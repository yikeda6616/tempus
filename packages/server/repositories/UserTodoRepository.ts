import { UserTodo } from '../entities';
import { getRepository } from 'typeorm';

export class UserTodoRepository {
  static async create(todo: UserTodo) {
    await getRepository(UserTodo).insert(todo);
  }

  static async get(tid: string) {
    return await getRepository(UserTodo).findOne({ uid: 1, tid });
  }

  static async update(tid: string, name: string) {
    return await getRepository(UserTodo).update(
      {
        uid: 1,
        tid,
      },
      {
        name,
      },
    );
  }

  static async delete(tid: string) {
    return await getRepository(UserTodo).delete({
      uid: 1,
      tid,
    });
  }
}
