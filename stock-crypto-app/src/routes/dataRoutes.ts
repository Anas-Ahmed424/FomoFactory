import { Router } from 'express';
import { getStocks, getCrypto } from '../controllers/dataController';

const router = Router();

router.get('/stocks', getStocks);
router.get('/crypto', getCrypto);

export default router;
