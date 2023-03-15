import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { AutomovilService } from './automovil.service';
import { CreateAutomovilDTO } from './dto/automovil.dto';

@Controller('automovil')
export class AutomovilController {
    constructor(private automovilService:AutomovilService){}

    @Post('/create')
    async createPost(@Res() res, @Body()
    createAutomovilDTO:CreateAutomovilDTO){
        const automovil = await this.automovilService.createAutomovil(createAutomovilDTO)

        //console.log(createAutomovilDTO)
        return res.status(HttpStatus.OK).json({
            message:"Auto creado exitosamente",
            automovil
        })
    }

    @Get('/')
    async getAutomoviles(@Res() res){
        const automoviles= await this.automovilService.getAutomoviles()
        return res.status(HttpStatus.OK).json([
            //message:"Listado de automoviles",
            automoviles
        ])
    }

    @Get('/:automovilId')
    async getAutomovil(@Res() res, @Param('automovilId') automovilId){
        const automovil = await this.automovilService.getAutomovil(automovilId)
        if(!automovil) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Automovil encontrado",
            automovil
        })

    }
    @Delete('/delete')
    async deleteAutomovil(@Res() res, @Query('automovilId') automovilId){
        const automovilDelete = await this.automovilService.deleteAutomovil(automovilId)
        if(!automovilDelete) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Automovil eliminado exitosamente",
            automovilDelete
        })

    }

    @Put('/update')
    async updateAutomovil(@Res() res, @Query('automovilId') automovilId, @Body() createAutomovilDTO:CreateAutomovilDTO) {
        const updateAutomovil = await this.automovilService.updateAutomovil(automovilId, createAutomovilDTO)
        if(!updateAutomovil) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Automovil actualizado exitosamente",
            updateAutomovil
        })

    }
}
