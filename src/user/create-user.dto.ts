import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";
export class CreateUserDto {
    @ApiProperty()  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly roleNumber: number;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly marks: number;
}