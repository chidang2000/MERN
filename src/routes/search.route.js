import express from 'express';
import SearchController from '../app/controllers/SearchController.js';

const router = express.Router();

router.get('/', SearchController.getSearch);

export default router;
