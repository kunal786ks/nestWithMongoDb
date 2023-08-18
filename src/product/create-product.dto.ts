import { IsNumber,IsString,IsNotEmpty,MaxLength } from "class-validator";
 import { user } from "src/user/user.schema";

export class CreateProductDto{

    	@IsNotEmpty()
        @IsString()
        readonly name: string


        @IsString()
        @IsNotEmpty()
        readonly owner: user
}