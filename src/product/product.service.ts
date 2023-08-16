import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './create-product.dto';
import { Model } from 'mongoose';
import {product} from './product.schema';
@Injectable()
export class ProductService {
    constructor(@InjectModel(product.name) private productModel:Model<product>){}

    async createProduct(createProductDto:CreateProductDto):Promise<product>{
        const product=await new this.productModel(createProductDto);
        return product.save();
    }
}
