import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'WEBHOOK_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'app-gateway',
            brokers: [process.env.KAFKA_HOST],
          },
          consumer: {
            groupId: 'kafka-microservices',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
