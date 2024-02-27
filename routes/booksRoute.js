import express from 'express';
import Controller from '../controller/bookController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';


const router = express.Router();

router.use(authenticateUser);

router.post('/', Controller.createBook);
router.get('/', Controller.getAllBooks);
router.get('/:id', Controller.getBookById);
router.put('/:id', Controller.updateBook);
router.delete('/:id', Controller.deleteBook);

export default router;
