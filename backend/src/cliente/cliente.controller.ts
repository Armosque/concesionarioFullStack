import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateClienteDTO } from './dto/cliente.dto';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor(private clienteService:ClienteService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createClienteDTO:CreateClienteDTO){
        const cliente = await this.clienteService.createCliente(createClienteDTO)
        return res.status(HttpStatus.OK).json({
            message:"Cliente creado exitosamente",
            cliente
        
        })
    }
    @Get('/')
    async getClientes(@Res() res,){
        const clientes= await this.clienteService.getClientes()
        return res.status(HttpStatus.OK).json({
            message:"Listado de clientes",
            clientes
        
        })
    }
    @Get('/:clienteId')
    async getCliente(@Res() res, @Param('clienteId') clienteId){
        const cliente = await this.clienteService.getCliente(clienteId)
        if(!cliente) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Cliente encontrado",
            cliente
        })

    }
    @Delete('/delete')
    async deleteCliente(@Res() res, @Query('clienteId') clienteId){
        const clienteDelete = await this.clienteService.deleteCliente(clienteId)
        if(!clienteDelete) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Cliente eliminado exitosamente",
            clienteDelete
        })

    }
    @Put('/update/:clienteId')
    async updateCliente(@Res() res, @Param('clienteId') clienteId, @Body()createClienteDTO:CreateClienteDTO){
        const clienteUpdate= await this.clienteService.updateCliente(clienteId, createClienteDTO)
        if(!clienteUpdate) throw new NotFoundException('El automovil con ese id no existe')
        return res.status(HttpStatus.OK).json({
            message:"Cliente actualizado exitosamente",
            clienteUpdate
        })
    }

}
