import express from 'express';
import controller from '../controller/authController.js';

const router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

export default router;
