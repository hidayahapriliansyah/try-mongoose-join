import express from 'express';
import * as userContoller from '../controllers/userController.js';

const router = express.Router();

router.get('/user', userContoller.user_get);
router.post('/user', userContoller.user_post);

export default router;
