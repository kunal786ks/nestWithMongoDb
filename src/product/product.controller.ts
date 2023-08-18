import { Body, Controller, Post,Res,HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
    @Post('add-product')
    async addProduct(@Res() response,@Body() CreateProductDto:CreateProductDto){
        try{
            const newProduct=await this.productService.createProduct(CreateProductDto);
            return response.status(HttpStatus.CREATED).json({
                success:'true',
                message:'Product Created successfully',
                newProduct
            })
        }catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                success:false,
                message:'Couldnot Add a user',
                error:'Bad Request'
            })
        }
    }

}
