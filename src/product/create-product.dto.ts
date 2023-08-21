import { IsNumber,IsString,IsNotEmpty,MaxLength } from "class-validator";
import { user } from "src/user/user.schema";
import { ApiProperty } from "@nestjs/swagger/dist";
export class CreateProductDto{
        @ApiProperty()
    	@IsNotEmpty()
        @IsString()
        readonly name: string

        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        readonly owner: user
}