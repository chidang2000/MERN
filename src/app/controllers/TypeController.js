import Type from '../models/typeProductModel.js';
import Product from '../models/productModel.js';

const TypeController = {
    getAllTypeProduct: async (req, res) => {
        try {
            const type = await Type.find();
            return res.status(200).json(type);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    getATypeProduct: async (req, res) => {
        try {
            const type = await Type.findById(req.params.id);
            return res.status(200).json(type);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    addTypeProduct: async (req, res) => {
        try {
            const newType = new Type(req.body);
            const saveType = await newType.save();
            return res.status(200).json('Create Type Product Success !');
        } catch (err) {
            res.status(404).json(err);
        }
    },

    updateTypeProduct: async (req, res) => {
        try {
            await Type.findByIdAndUpdate({ _id: req.params.id }, req.body);
            return res.status(200).json('Update Type Product Success !');
        } catch (err) {
            res.status(404).json(err);
        }
    },

    deleteTypeProduct: async (req, res) => {
        const product = await Product.find({ type: req.params.id });
        if (product.length > 0) {
            return res.status(404).json('Type is check so you cant delete');
        } else {
            await Type.findByIdAndDelete(req.params.id);
            return res.status(200).json('Delete Type Product Success');
        }
    },
};

export default TypeController;
