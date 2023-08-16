import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { order, orderSchema } from './order.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:order.name,schema:orderSchema}])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
