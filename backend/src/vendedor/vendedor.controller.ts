import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateVendedorDTO } from './dto/vendedor.dto';

@Controller('vendedor')
export class VendedorController {
    @Post('/create')
    createPost(@Res() res, @Body() createVendedorDTO:CreateVendedorDTO){
        return res.status(HttpStatus.OK).json({
            message:"Vendedor"
        })
    }

}
