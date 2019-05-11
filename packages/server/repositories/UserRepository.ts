import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class UserRepository {
  static async create(user: User) {
    await getRepository(User).insert(user);
  }
}
