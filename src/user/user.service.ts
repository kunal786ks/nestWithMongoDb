import { Injectable,NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { CreateUserDto } from './create-user.dto';
import { Iuser } from './user.interface';
import { Model } from 'mongoose';
import { UpdateUserDto } from './update-user.dto';
import {user} from './user.schema'


@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private userModel:Model<user>){}

    async createStudent(createStudentDto: CreateUserDto): Promise<user> {
        const newUser = await new this.userModel(createStudentDto);
        return newUser.save();
     }
}
