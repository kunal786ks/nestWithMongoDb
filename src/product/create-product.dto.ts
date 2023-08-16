import { IsNotEmpty,IsNumber,IsString,MaxLength } from "class-validator";
export class CreateProductDto{

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name:string

    @IsString()
    @IsNotEmpty()
    readonly description:string

    @IsNumber()
    @IsNotEmpty()
    readonly quantity:number

    @IsNumber()
    @IsNotEmpty()
    readonly stock:number
}