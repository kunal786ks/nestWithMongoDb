import { Controller,Get,Body,Res,HttpStatus,Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productservice:ProductService){}

    @Post('addproduct')
    async createProduct(@Res() response,@Body() CreateProduct:CreateProductDto){
        try{
            const newProd=await this.productservice.createProduct(CreateProduct)
            return response.status(HttpStatus.CREATED).json({
                message:'student created succesfully',
                newProd
            })
        }catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
             });
        }
    }
   
}
