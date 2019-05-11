import { User } from '../entities/User';
import { UserService } from '../services/UserService';
import { post } from './';

interface CreateRequest {
  name: string;
}

class UserHandler {
  @post('/user')
  static async create(params: CreateRequest) {
    const user = new User();
    user.name = params.name;
    await UserService.create(user);
  }
}
