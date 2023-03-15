import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendedor } from './interfaces/vendedor.interfaces';
import { CreateClienteDTO } from 'src/cliente/dto/cliente.dto';
import { CreateVendedorDTO } from './dto/vendedor.dto';

@Injectable()
export class VendedorService {

    constructor(@InjectModel('Vendedor') private vendedorModel:Model<Vendedor>){}

    async getVendedores():Promise<Vendedor[]>{
        const vendedores = await this.vendedorModel.find()
        return vendedores;
    }

    async getVendedor(vendedorId:number):Promise<Vendedor>{
        const vendedor = await this.vendedorModel.findById(vendedorId)
        return vendedor;
    }
    async createVendedor(createClienteDTO:CreateClienteDTO):Promise<Vendedor>{
        const vendedor =  new this.vendedorModel(createClienteDTO)
        return await vendedor.save()
    }
    async deleteVendedor(vendedorId:number):Promise<Vendedor>{
        const vendedorDelete= await this.vendedorModel.findByIdAndUpdate(vendedorId)
        return vendedorDelete;
    }
    async updateVendedor(vendedorId:number, createVendedorDTO:CreateVendedorDTO):Promise<Vendedor>{
        const vendedorUpdate= await this.vendedorModel.findByIdAndUpdate(vendedorId)
        return vendedorUpdate;
    }
    getAutosVendidosVendedor(){}
    agregarAutoVendidoVendedor(){}


}
