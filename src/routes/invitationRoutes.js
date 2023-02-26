import express from 'express';
import * as invitationController from '../controllers/invitationController.js';

const router = express.Router();

router.get('/invitation', invitationController.invitation_get);
router.post('/invitation', invitationController.invitation_post);
router.get('/invitation/:id', );

export default router;