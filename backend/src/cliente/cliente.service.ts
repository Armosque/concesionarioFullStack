import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './interfaces/cliente.interfaces';
import { CreateClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(@InjectModel('Cliente') private clienteModel:Model<Cliente>){}

    async getClientes():Promise <Cliente[]>{
        const clientes= await this.clienteModel.find()
        return clientes;
    }

    async getCliente(clienteId : number):Promise <Cliente>{
        const cliente= await this.clienteModel.findById(clienteId)
        return cliente;
    }
    async createCliente(createClienteDTO:CreateClienteDTO):Promise <Cliente>{
        const cliente =  new this.clienteModel(createClienteDTO)
        return await cliente.save();

    }
    async deleteCliente(clienteId:number):Promise<Cliente>{
        const clienteDelete = await this.clienteModel.findByIdAndDelete(clienteId)
        return clienteDelete;
    }
    async updateCliente(clienteId:number, createClienteDTO:CreateClienteDTO):Promise<Cliente>{
        const clienteUpdate = await this.clienteModel.findByIdAndUpdate(clienteId, createClienteDTO, {new: true})
        return clienteUpdate;
    }
    getClienteAuto(){}
    asignarAutoCliente(){}
    eliminarAutoCliente(){}

    
    
}
