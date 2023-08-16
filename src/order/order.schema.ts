import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



@Schema()
export class order{

    @Prop()
    name:string

    @Prop()
    price:string
}

export type orderDocument=Document & order
export const orderSchema=SchemaFactory.createForClass(order)