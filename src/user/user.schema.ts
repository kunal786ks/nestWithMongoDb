import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class user {
   @Prop()
   name: string;
   @Prop()
   roleNumber: number;
   @Prop()
   class: number;
   @Prop()
   gender: string;
   @Prop()
   marks: number;
}

export type UserDocument = user & Document;
export const userSchema = SchemaFactory.createForClass(user);