import { Injectable, Logger } from '@nestjs/common';
import { WebhookDto } from './dto/webhook.dto';

@Injectable()
export class WebhookService {
  private logger = new Logger();

  handleWebhook(body: WebhookDto) {
    this.logger.log('WEBHOOK RECEIVED', body);
  }
}
