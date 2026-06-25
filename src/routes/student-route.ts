import { Router } from 'express';
import * as StudentController from '../controllers/auth-controller';
const router = Router() as Router;

router.post('/signup', StudentController.signup);

export default router;
