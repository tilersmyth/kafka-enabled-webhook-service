import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './dto/webhook.dto';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  handleWebhook(@Body() body: WebhookDto) {
    return this.webhookService.handleWebhook(body);
  }
}
