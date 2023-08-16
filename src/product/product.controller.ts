import {
  Controller,
  Get,
  Body,
  Res,
  HttpStatus,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';
import { updateProductDto } from './update-product.dto';
import { response } from 'express';
import { product } from './product.schema';
@Controller('product')
export class ProductController {
  constructor(private readonly productservice: ProductService) {}

  @Post('addproduct')
  async createProduct(
    @Res() response,
    @Body() CreateProduct: CreateProductDto,
  ) {
    try {
      const newProd = await this.productservice.createProduct(CreateProduct);
      return response.status(HttpStatus.CREATED).json({
        message: 'student created succesfully',
        newProd,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('update/:id')
  async updateProduct(
    @Res() response,
    @Param('id') productId: string,
    @Body() updateProduct: updateProductDto,
  ) {
    try {
      const existingProduct = await this.productservice.updateProduct(
        productId,
        updateProduct,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Product has been successfully updated',
        existingProduct,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('allproducts')
  async getAllProducts(@Res() response){
    try{
        const productData=await this.productservice.getAllProduct();
        return response.status(HttpStatus.OK).json({
            success:true,
            message:'All products from the product list',
            productData
        })
    }
    catch(err){
        return response.status(err.status).json({
            message:'there is some error'
        });
    }
  }

  @Get('product/:id')
  async getOneProduct(@Res() response,@Param('id') productId:string){
    try{
        const existingProduct=await this.productservice.getProduct(productId)
        return response.status(HttpStatus.OK).json({
            success:true,
            message:'found successfully',
            existingProduct
        })
    }
    catch(err){
        return response.status(err.status).json(err.message)
    }
  }
  

  @Delete('delete/:id')
  async deleteProduct(@Res() response,@Param('id') productId:string):Promise<product>{
    try{
        const deleted=await this.productservice.deleteProduct(productId)
        return response.status(HttpStatus.OK).json({
            success:true,
            message:'found successfully',
            deleted
        })
    }
    catch(err){
        return response.status(err.status).json(err.message)
    }
  }
}
