import { getRepository } from 'typeorm';
import { User } from '../entities';

export class UserRepository {
  static async create(user: User) {
    await getRepository(User).insert(user);
  }

  static async get(id: number) {
    return await getRepository(User).findOne({ id });
  }

  // TODO:
  static async update(id: number) {
    // return await getRepository(User).update({});
  }
}
