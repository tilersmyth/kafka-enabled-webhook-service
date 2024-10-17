export class WebhookDataDto {
  type: string;
  id: number;
}

export class WebhookDto {
  scope: string;
  data: WebhookDataDto;
  hash: string;
}
