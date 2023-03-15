import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Automovil } from './interfaces/automovil.interfaces';
import { CreateAutomovilDTO } from './dto/automovil.dto';



@Injectable()
export class AutomovilService {

    constructor(@InjectModel('Automovil') private automovilModel:Model<Automovil>){}

    async getAutomoviles():Promise<Automovil[]>{
        const automoviles = await this.automovilModel.find()
        return automoviles;
    }
    async getAutomovil(automovilId:number):Promise<Automovil>{
        const automovil= await this.automovilModel.findById(automovilId);
        return automovil;
    }
    async createAutomovil(createAutomovilDTO:CreateAutomovilDTO):Promise<Automovil> {
        const automovil=  new this.automovilModel(createAutomovilDTO)
            return await automovil.save();
        
    }
    async deleteAutomovil(automovilId:number):Promise<Automovil>{
        const deleteAuto= await this.automovilModel.findByIdAndDelete(automovilId);
        return deleteAuto;
        
    }
    async updateAutomovil(automovilId:number, createAutomovilDTO:CreateAutomovilDTO):Promise<Automovil>{
        const updateAuto = await this.automovilModel.findByIdAndUpdate(automovilId, createAutomovilDTO, {new:true})
            return updateAuto;
    }
    asignarAutoCliente(){}
    eliminarAutoCliente(){}


}
