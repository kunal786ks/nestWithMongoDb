import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()

export class product{
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    quantity:number

    @Prop()
    stock:number
}

export type productDocument=product & Document;
export const productSchema=SchemaFactory.createForClass(product)