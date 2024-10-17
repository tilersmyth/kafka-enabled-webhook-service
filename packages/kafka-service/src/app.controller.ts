import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { PayloadDto } from './dto/payload.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.created')
  userCreated(
    @Payload() payload: PayloadDto,
    @Ctx() context: KafkaContext,
  ) {
    this.appService.created(payload, context);
  }

  @MessagePattern('user.updated')
  userUpdated(
    @Payload() payload: PayloadDto,
    @Ctx() context: KafkaContext,
  ) {
    this.appService.updated(payload, context);
  }

  @MessagePattern('user.deleted')
  userDeleted(
    @Payload() payload: PayloadDto,
    @Ctx() context: KafkaContext,
  ) {
    this.appService.deleted(payload, context);
  }
}
