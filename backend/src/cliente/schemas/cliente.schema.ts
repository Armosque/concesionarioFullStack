import { Schema } from "mongoose";

export const ClienteSchema = new Schema({
    
    nombre:String,
    automovil_id: Number,
    createdAt:{
        type:Date,
        default:Date.now()
    }

})