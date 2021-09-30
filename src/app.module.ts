import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
   imports: [
    //  ClientsModule.register([{
  //   name: 'AUTH_CLIENT',
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://localhost:5672'],
  //     queue: 'chat_try_queue',
  //     queueOptions: {
  //       durable: false
  //     },
  //   },
  // }]),
  ClientsModule.register([{
    name: 'AUTH_CLIENT',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    }
  }])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
