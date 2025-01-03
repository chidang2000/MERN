import express from 'express';
import ProductController from '../app/controllers/ProductController.js';

const router = express.Router();

// router.get('/admin/product/:id', ProductController.getAProduct);
router.put('/:id/update', ProductController.updateProduct);
router.post('/create', ProductController.createProduct);
router.get('/:id', ProductController.getAProduct);
router.get('/', ProductController.getAllProduct);

export default router;
