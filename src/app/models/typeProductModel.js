import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const typeProductSchema = new Schema(
    {
        name: { type: String, require: true },
    },
    { timestamps: true }
);

export default mongoose.model('Type', typeProductSchema, 'type');
