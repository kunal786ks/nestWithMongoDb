import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Iuser } from './user.interface';
import { user,userSchema } from './user.Schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: user.name, schema: userSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
