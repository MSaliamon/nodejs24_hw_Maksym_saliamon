import express from 'express';
import { authMiddleware } from '../auth/auth.middleware';

const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route.');
});

export default router;