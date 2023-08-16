import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './create-product.dto';
import { Model } from 'mongoose';
import { updateProductDto } from './update-product.dto';
import {product} from './product.schema';
@Injectable()
export class ProductService {
    constructor(@InjectModel(product.name) private productModel:Model<product>){}

    async createProduct(createProductDto:CreateProductDto):Promise<product>{
        const product=await new this.productModel(createProductDto);
        return product.save();
    }

    async updateProduct(productId:string,updateproduct:updateProductDto):Promise<product>{
       const existingProduct=await this.productModel.findByIdAndUpdate(productId,updateproduct,{new: true})
       if (!existingProduct) {
        throw new NotFoundException(`Student #${productId} not found`);
      }
      return existingProduct;
    }

    async getAllProduct():Promise<product[]>{
        const products=await this.productModel.find({})
        if(!products || products.length==0){
            throw new NotFoundException('No Product found')
        }
        return products
    }

    async getProduct(productId:string):Promise<product>{
        const productOne=await this.productModel.findById(productId).exec()
        if(!productOne){
            throw new NotFoundException(`product with this ${productId} not found`)
        }
        return productOne;
    }

    async deleteProduct(productId:string):Promise<product>{
        const deleted=await this.productModel.findByIdAndDelete(productId);
        if(!deleted){
            throw new NotFoundException(`unable to delete the product`)
        }
        return deleted
    }
}
