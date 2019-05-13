import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

export class UserService {
  static async create(user: User) {
    await UserRepository.create(user);
  }

  static async get(id: number) {
    return await UserRepository.get(id);
  }

  static async update(id: number) {
    return await UserRepository.update(id);
  }
}
