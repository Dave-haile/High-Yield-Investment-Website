import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('4000'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET should be at least 32 chars'),
  JWT_EXPIRES_IN: z.string().default('1d') // e.g., "1d" or "3600s"
});

export const env = EnvSchema.parse(process.env);
