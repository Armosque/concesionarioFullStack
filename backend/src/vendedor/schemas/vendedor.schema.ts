import { Schema } from "mongoose";

export const VendedorSchema = new Schema({
    
    nombre:String,
    autos: [],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})