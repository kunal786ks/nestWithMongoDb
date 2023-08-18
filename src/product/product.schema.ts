import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { user } from 'src/user/user.schema'
import * as mongoose from 'mongoose'
@Schema()
export class product {
    @Prop({
        type: String,
        required: true,
        unique: true,

    })
    name: string


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
    owner: user;
}
export type productDocument=product & Document;
export const productSchema=SchemaFactory.createForClass(product)