import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  private logger = new Logger();

  constructor(@Inject('WEBHOOK_SERVICE') private client: ClientKafka) {}

  create(body: CreateUserDto) {
    // Handle user creation

    const hash = uuidv4();

    this.client.emit('user.created', { id: body.id, hash });

    this.logger.log(`event: create, hash: ${hash}`);
  }

  update(body: UpdateUserDto) {
    // Handle user update

    const hash = uuidv4();

    this.client.emit('user.updated', { id: body.id, hash });

    this.logger.log(`event: update, hash: ${hash}`);
  }

  delete(body: DeleteUserDto) {
    // Handle user delete

    const hash = uuidv4();

    this.client.emit('user.deleted', { id: body.id, hash });

    this.logger.log(`event: delete, hash: ${hash}`);
  }
}
