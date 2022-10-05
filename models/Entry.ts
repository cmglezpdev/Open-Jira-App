import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "../interfaces";

interface IEntry extends Entry {}

const entrySchema = new Schema({
    description: {
        type: String,
        require: true
    },
    createAt: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        },
        require: true
    }
});


const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;