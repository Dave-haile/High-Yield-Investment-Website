import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { signUp, login } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.js';
import { SignUpSchema, LoginSchema } from '../validators/auth.validator.js';

const router = Router();

// Basic rate limits (tweak to your needs)
const signupLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 20 }); // 20/hr
const loginLimiter  = rateLimit({ windowMs: 15 * 60 * 1000, max: 50 }); // 50/15min

router.post('/signup', signupLimiter, validate(SignUpSchema), signUp);
router.post('/login',  loginLimiter,  validate(LoginSchema),  login);

export default router;
