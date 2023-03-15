import { Schema } from "mongoose";

export const AutomovilSchema = new Schema({

    marca:String,
    modelo:String,
    año:String,
    vendedor_id:Number,
    cliente_id:Number,
    createdAt: { type: Date, default: Date.now }
})

