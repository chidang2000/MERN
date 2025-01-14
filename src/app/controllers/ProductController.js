import Product from '../models/productModel.js';

const ProductController = {
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find().populate({ path: 'type', model: 'Type' });
            const countProductDeleted = await Product.countDocumentsWithDeleted({ deleted: true });
            return res.status(200).json({ products, countProductDeleted });
        } catch (err) {
            res.status(404).json(err);
        }
    },

    //[GET] /admin/product/:id
    getAProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id).populate('type');
            return res.status(200).json(product);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    getProductDeleted: async (req, res) => {
        try {
            const result = await Product.findWithDeleted({ deleted: true });
            res.status(200).json(result);
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

    // [DELETE] /product/:id/delete
    deleteProduct: async (req, res) => {
        try {
            await Product.delete({ _id: req.params.id });
            return res.status(200).json('DELETE SUCCESS');
        } catch (err) {
            res.status(404).json(err);
        }
    },

    // [DELETE] /product/:id/forcedelete
    forceDeleteProduct: async (req, res) => {
        try {
            await Product.deleteOne({ _id: req.params.id });
            return res.status(200).json('DELETE SUCCESS');
        } catch (err) {
            res.status(404).json(err);
        }
    },
    // [PATCH] /product/:id/restore
    restoreProduct: async (req, res) => {
        try {
            await Product.restore({ _id: req.params.id });
            return res.status(200).json('RESTORE SUCCESS');
        } catch (err) {
            res.status(404).json(err);
        }
    },
};

export default ProductController;
