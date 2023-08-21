import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
@Controller('user')
@ApiTags('users')
export class UserController {
    constructor(private readonly userService:UserService){}


    @Post('/adduser')
    async createStudent(@Res() response,@Body() CreateUserDto:CreateUserDto){
        try{
            const newUser=await this.userService.createStudent(CreateUserDto)
            return response.status(HttpStatus.CREATED).json({
                message:'student created succesfully',
                newUser
            })
        }catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
             });
        }
    } 
}
