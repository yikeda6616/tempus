import { User } from '../entities';
import { UserService } from '../services';
import { Post, Get, Put, Delete } from '.';

interface CreateRequest {
  name: string;
}

class UserHandler {
  @Post('/user')
  static async create(params: CreateRequest) {
    const user = new User();
    user.name = params.name;
    await UserService.create(user);
  }

  @Get('/user')
  static async get() {
    return await UserService.get(1); // TODO:
  }

  @Put('/user')
  static async update() {
    return await UserService.update(1); // TODO:
  }
}
