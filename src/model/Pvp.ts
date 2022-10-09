import { Schema, model } from "mongoose";

const pvpSchema = new Schema({    
    marca: String, 
    presentacion: String,
    pvp: Number,
    sku: String,
});

export default model('Pvp', pvpSchema);