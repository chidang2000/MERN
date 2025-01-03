import Product from '../models/productModel.js';

const ProductController = {
    getAllProduct: async (req, res) => {
        try {
            const product = await Product.find();
            res.status(200).json(product);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    //[GET] /admin/product/:id
    getAProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            return res.status(200).json(product);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    //[POST]  /product/create
    createProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            const saveProduct = await newProduct.save();
            return res.status(200).json(saveProduct);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    //[PUT] /product/id/update

    updateProduct: async (req, res) => {
        try {
            await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
            return res.status(200).json('UPDATE SUCCESS!');
        } catch (err) {
            res.status(404).json(err);
        }
    },
};

export default ProductController;
