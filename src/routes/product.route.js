import express from 'express';
import ProductController from '../app/controllers/ProductController.js';

const router = express.Router();

router.patch('/:id/restore', ProductController.restoreProduct);
router.delete('/:id/forcedelete', ProductController.forceDeleteProduct);
router.delete('/:id/delete', ProductController.deleteProduct);
router.put('/:id/update', ProductController.updateProduct);
router.post('/create', ProductController.createProduct);
router.get('/deleted', ProductController.getProductDeleted);
router.get('/:id', ProductController.getAProduct);
router.get('/', ProductController.getAllProduct);

export default router;
