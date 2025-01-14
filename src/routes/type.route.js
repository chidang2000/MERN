import express from 'express';
import TypeController from '../app/controllers/TypeController.js';

const router = express.Router();

router.delete('/:id/delete', TypeController.deleteTypeProduct);
router.put('/:id/update', TypeController.updateTypeProduct);
router.post('/create', TypeController.addTypeProduct);
router.get('/:id', TypeController.getATypeProduct);
router.get('/', TypeController.getAllTypeProduct);

export default router;
