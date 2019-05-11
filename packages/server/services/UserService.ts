import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

export class UserService {
  static async create(user: User) {
    await UserRepository.create(user);
  }
}
