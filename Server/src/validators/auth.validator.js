import { z } from 'zod';

const email = z.string().email('Invalid email format').trim();
const password = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(72, 'Password too long'); // bcrypt max input consideration

export const SignUpSchema = z.object({
  body: z.object({
    email,
    password,
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match'
  })
});

export const LoginSchema = z.object({
  body: z.object({
    email,
    password
  })
});
