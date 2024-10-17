import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.appService.create(body);
  }

  @Post()
  updateUser(@Body() body: UpdateUserDto) {
    return this.appService.update(body);
  }

  @Delete()
  deleteUser(@Body() body: DeleteUserDto) {
    return this.appService.delete(body);
  }
}
