import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, require: true },
        image: { type: String, require: true },
        type: { type: Schema.Types.ObjectId, ref: 'Type', require: true },
        price: { type: Number, require: true },
        countInStock: { type: Number, require: true },
        rating: { type: Number, require: true },
        description: { type: [String] },
    },
    {
        timestamps: true,
    }
);

productSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

export default mongoose.model('Product', productSchema, 'product');
