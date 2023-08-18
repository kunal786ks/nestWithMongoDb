import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { product } from './product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel(product.name) private productModel:Model<product>){}

    async createProduct(createProductdto:CreateProductDto){
        const newProduct=await new this.productModel(createProductdto).populate('owner')
        return newProduct.save()
    }

}
