import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { KafkaContext } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class AppService {
  private logger = new Logger();

  constructor(private readonly httpService: HttpService) {}

  async created(payload: PayloadDto, context: KafkaContext) {
    this.logger.log(`${context.getTopic()} started`);

    // Delay to simulate a db query
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await firstValueFrom(this.httpService.post('http://localhost:3001/webhooks', {
            scope: 'user/created',
            data: {
              type: 'user',
              id: payload.id,
            },
            hash:payload.hash
          }));

          resolve(null);
        } catch (error) {
          this.logger.error(error)
          reject(error);
        }
      }, 1000);
    });

    this.logger.log(`${context.getTopic()} completed`);
  }

  async updated(payload: PayloadDto, context: KafkaContext) {
    this.logger.log(`${context.getTopic()} started`);

    // Delay to simulate a db query
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await firstValueFrom(this.httpService.post('http://localhost:3001/webhooks', {
            scope: 'user/updated',
            data: {
              type: 'user',
              id: payload.id,
            },
            hash:payload.hash
          }));

          resolve(null);
        } catch (error) {
          this.logger.error(error)
          reject(error);
        }
      }, 1000);
    });

    this.logger.log(`${context.getTopic()} completed`);
  }

  async deleted(payload: PayloadDto, context: KafkaContext) {
    this.logger.log(`${context.getTopic()} started`);

    // Delay to simulate a db query
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await firstValueFrom(this.httpService.post('http://localhost:3001/webhooks', {
            scope: 'user/deleted',
            data: {
              type: 'user',
              id: payload.id,
            },
            hash:payload.hash
          }));

          resolve(null);
        } catch (error) {
          this.logger.error(error)
          reject(error);
        }
      }, 1000);
    });

    this.logger.log(`${context.getTopic()} completed`);
  }
}
