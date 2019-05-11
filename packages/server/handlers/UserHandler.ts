import { User } from '../entities/User';
import { UserService } from '../services/UserService';
import { post, get } from '.';

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
  @get('/user')
  static async get() {
    return await UserService.get(1);
  }
}
