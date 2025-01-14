import Product from '../models/productModel.js';

const SearchController = {
    getSearch: async (req, res) => {
        const { q } = req.query;
        let filters = {};

        if (q) {
            filters.name = { $regex: q, $options: 'i' }; // Tìm kiếm không phân biệt hoa thường
        }
        try {
            const products = await Product.find(filters);
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving products', error: err });
        }
    },
};

export default SearchController;
